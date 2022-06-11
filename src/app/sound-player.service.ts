import { Injectable } from '@angular/core';
import { SoundPlayer } from "./sound-player";
import { Sound } from "./classes/Sound";
import { Hotkey } from "./classes/Hotkey";
import { SoundsLibraryService } from "./sounds-library.service";

@Injectable({
  providedIn: 'root'
})
export class SoundPlayerService extends SoundPlayer {
  private audio = new Audio();

  constructor(private soundsLibraryService: SoundsLibraryService) {
    super();
  }

  public playSound(sound: Sound): void {
    this.audio.src = '/' + sound.source;
    this.play();
  }

  public playSoundByHotkey(hotkey: Hotkey) {
    const sound = this.soundsLibraryService.getSoundByHotkey(hotkey);
    if (sound) {
      this.playSound(sound);
    }
  }

  public stopCurrentSound(): void {
    this.audio.pause();
  }

  private play(): void {
    this.audio.load();
    this.audio.play();
  }
}
