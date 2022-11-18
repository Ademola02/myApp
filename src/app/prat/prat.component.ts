import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prat',
  template: `
  <app-server></app-server>
  <app-server></app-server>`,
  styleUrls: ['./prat.component.css']
})
export class PratComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
