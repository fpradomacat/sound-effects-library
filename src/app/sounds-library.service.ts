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

  searchSoundsByText(searchText: string): Section {
    const sounds = this.getSoundsThatContainsText(searchText);

    return new Section(`Resultados`, "", sounds);
  }

  private getSoundsThatContainsText(searchText: string) {
    let containsSearchText = (x: Sound) => this.normalize(x.displayName).includes(this.normalize(searchText));
    const filteredSounds = this.allSounds.filter(containsSearchText);
    return filteredSounds;
  }

  private get allSounds(): Sound[] {
    return this.soundSections.flatMap(x => x.getSounds());
  }

  private normalize(str: string): string {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

}
