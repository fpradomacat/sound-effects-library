import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StopButtonComponent } from './stop-button/stop-button.component';
import { SoundCardComponent } from './sound-card/sound-card.component';
import { SoundsSectionComponent } from './sounds-section/sounds-section.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StopButtonComponent,
    SoundCardComponent,
    SoundsSectionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
