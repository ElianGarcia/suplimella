import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  year : string = '2021'
  constructor() {
    this.year = new Date().getFullYear().toString();
  }

  ngOnInit(): void {
  }

}
