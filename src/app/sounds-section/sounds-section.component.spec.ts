import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundsSectionComponent } from './sounds-section.component';

describe('SoundsSectionComponent', () => {
  let component: SoundsSectionComponent;
  let fixture: ComponentFixture<SoundsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
