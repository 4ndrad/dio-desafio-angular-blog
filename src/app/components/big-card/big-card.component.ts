import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  linkCard:string = ""
  @Input()
  photoCover:string = ""
  @Input()
  altPhotoCover:string = ""
  @Input()
  authorCard:string = ""
  @Input()
  cardTitle:string = ""
  @Input()
  cardDescription:string = ""

  constructor() { }

  ngOnInit() {
  }

}
