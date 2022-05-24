import { Hotkey } from './Hotkey';

export class Sound {

  private readonly _source: string;
  private readonly _displayName: string;
  private readonly _hotkey: Hotkey;

  constructor(_source: string,
              _displayName: string,
              _key: string = '',
              _isCtrlPressed: boolean = false) {
    this._source = _source;
    this._displayName = _displayName;
    this._hotkey = {key: _key, isCtrlPressed: _isCtrlPressed};
  }

  get displayName() {
    return this._displayName;
  }

  get source() {
    return `../../assets/audio/${this._source}.mp3`;
  }

  isSameHotkey(hotkey: Hotkey) {
    return this._hotkey.key === hotkey.key &&
      this._hotkey.isCtrlPressed === hotkey.isCtrlPressed;
  }
}
