import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChronometreComponent } from './chronometre/chronometre.component';
import { CompteurComponent } from './compteur/compteur.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'home', component: WelcomeComponent },
  { path: 'counter', component: CompteurComponent },
  { path: 'stopwatch', component: ChronometreComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
