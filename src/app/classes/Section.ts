//todo rename to SoundsSection
import { Hotkey } from './Hotkey';
import { Sound } from './Sound';

export class Section {

  constructor(
    private readonly name: string,
    private readonly description: string,
    private readonly sounds: Sound[]
  ) {
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  getSounds(): Sound[] {
    return this.sounds;
  }
}
