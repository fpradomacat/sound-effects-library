import { Component, Input } from '@angular/core';
import { Section } from "../classes/Section";

@Component({
  selector: 'app-sounds-section',
  templateUrl: './sounds-section.component.html',
  styleUrls: ['./sounds-section.component.scss']
})
export class SoundsSectionComponent {

  @Input()
  section!: Section;

}
