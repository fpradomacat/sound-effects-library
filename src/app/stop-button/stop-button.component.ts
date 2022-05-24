import { Component, HostListener } from '@angular/core';
import { SoundPlayerService } from "../sound-player.service";

@Component({
  selector: 'app-stop-button',
  templateUrl: './stop-button.component.html',
  styleUrls: ['./stop-button.component.scss']
})
export class StopButtonComponent {

  isStopButtonActive = false;

  constructor(private soundPlayerService: SoundPlayerService) {
  }

  public stopCurrentSound(): void {
    this.soundPlayerService.stopCurrentSound();
  }

  @HostListener('window:keydown.shift')
  handleShiftKeydown() {
    this.isStopButtonActive = true;
  }

  @HostListener('window:keyup.shift')
  handleShiftKeyup() {
    this.isStopButtonActive = false;
  }

}
