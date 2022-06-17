import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.component.html',
  styleUrls: ['./compteur.component.css']
})
export class CompteurComponent implements OnInit {

  valeur: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  reset(): void {
    this.valeur = 0;
  }

  increment(): void {
    this.valeur ++;
  }

  decrement(): void {
    this.valeur <= 0 ? this.valeur = 0 : this.valeur --;
  }

}
