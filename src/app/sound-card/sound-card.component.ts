import { Component, Input } from '@angular/core';
import { Sound } from "../classes/Sound";
import { SoundPlayerService } from "../sound-player.service";

@Component({
  selector: 'app-sound-card',
  templateUrl: './sound-card.component.html',
  styleUrls: ['./sound-card.component.scss']
})
export class SoundCardComponent {

  @Input()
  sound!: Sound;

  constructor(private soundPlayerService: SoundPlayerService) {
  }

  public play(sound: Sound): void {
    this.soundPlayerService.playSound(sound);
  }

}
