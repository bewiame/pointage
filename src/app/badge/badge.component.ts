import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {
  response = 'Hello';

  constructor() { 
  }

  ngOnInit(): void {
  }

  getResponse() {
    return this.response='Hello, you have click the button!';
  }


}
