import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

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
  id:number = 0

  constructor() { }

  ngOnInit() {
  }

}
