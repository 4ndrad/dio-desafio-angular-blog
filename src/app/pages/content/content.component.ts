import { dataFake } from './../../data/dataFake';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  private id:string | null = "0"
  photoCover:string =""
  altPhoto:string =""
  contentAuthor:string =" "
  contentTitle:string =" "
  contentDesciption:string =""

  constructor(private route:ActivatedRoute) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe( value =>
     this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id === id)

    this.photoCover = result[0].photo
    this.altPhoto = result[0].altPhoto
    this.contentAuthor = result[0].author
    this.contentTitle = result[0].title
    this.contentDesciption = result[0].description
  }

}
