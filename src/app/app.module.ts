import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitreComponent } from './titre/titre.component';
import { CompteurComponent } from './compteur/compteur.component';
import { AppRoutingModule } from './app-routing.module';
import { ChronometreComponent } from './chronometre/chronometre.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TitreChronoComponent } from './titre-chrono/titre-chrono.component';

@NgModule({
  declarations: [
    AppComponent,
    TitreComponent,
    CompteurComponent,
    ChronometreComponent,
    HeaderComponent,
    WelcomeComponent,
    TitreChronoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, TitreComponent, CompteurComponent]
})
export class AppModule { }
