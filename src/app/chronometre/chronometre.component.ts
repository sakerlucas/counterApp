import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chronometre',
  templateUrl: './chronometre.component.html',
  styleUrls: ['./chronometre.component.css']
})
export class ChronometreComponent implements OnInit {

  dateTime = new Date().toLocaleTimeString();
  dateDay = new Date();

  constructor() { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    //refresh the date every second
    setInterval(() => {
      this.dateTime = new Date().toLocaleTimeString();
      this.dateDay = new Date();
    }
    , 1000);

  }

}
