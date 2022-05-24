import { Component, HostListener } from '@angular/core';
import { Section } from "../classes/Section";
import { SoundPlayerService } from "../sound-player.service";
import { SoundsLibraryService } from "../sounds-library.service";
import { Hotkey } from "../classes/Hotkey";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(public soundsLibraryService: SoundsLibraryService,
              private soundPlayerService: SoundPlayerService) {
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyPressed(event: KeyboardEvent) {
    if (event.shiftKey) {
      this.soundPlayerService.stopCurrentSound();
    } else {
      const hotkey: Hotkey = {key: event.key, isCtrlPressed: event.ctrlKey};
      this.soundPlayerService.playSoundByHotkey(hotkey);
    }
  }
}
