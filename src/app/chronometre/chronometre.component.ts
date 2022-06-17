import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chronometre',
  templateUrl: './chronometre.component.html',
  styleUrls: ['./chronometre.component.css']
})
export class ChronometreComponent implements OnInit {

  valeur = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
