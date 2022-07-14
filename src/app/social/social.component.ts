import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
})
export class SocialComponent implements OnInit {

  public person: any = [
    {id:1, name:'Name: Ray Angelo G. Laylo', contactno:'Contact number: 09153533932', facebook:'https://www.facebook.com/rayangelo.laylo/'}
  ];

  constructor() { }

  ngOnInit() {}

}
