import { Injectable } from '@angular/core';
import { Section } from "./classes/Section";
import { soundSections } from "./sounds-database";
import { Sound } from "./classes/Sound";
import { Hotkey } from "./classes/Hotkey";

@Injectable({
  providedIn: 'root'
})
export class SoundsLibraryService {

  private _soundSections: Section[] = [];

  get soundSections() {
    if (this._soundSections.length === 0) this._soundSections = soundSections;

    return this._soundSections;
  }

  getSoundByHotkey(hotkey: Hotkey): Sound | undefined {
    return this.allSounds.find(x => x.isSameHotkey(hotkey));
  }

  private get allSounds() {
    return this.soundSections.flatMap(x => x.getSounds());
  }

}
