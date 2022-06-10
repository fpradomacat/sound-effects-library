import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { SoundPlayerService } from "../sound-player.service";
import { SoundsLibraryService } from "../sounds-library.service";
import { Hotkey } from "../classes/Hotkey";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  searchText: string = "";

  @ViewChild('searchInput')
  searchInput!: ElementRef;
  isInputTextFocused: boolean = false;

  constructor(public soundsLibraryService: SoundsLibraryService,
              private soundPlayerService: SoundPlayerService) {
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyPressed(event: KeyboardEvent) {
    if (this.isInputTextFocused || this.searchText) return;

    if (event.shiftKey) {
      this.soundPlayerService.stopCurrentSound();
    } else {
      const hotkey: Hotkey = {key: event.key, isCtrlPressed: event.ctrlKey};
      this.soundPlayerService.playSoundByHotkey(hotkey);
    }
  }
}
