import { Component, OnInit } from '@angular/core';
import { Apod } from '../shared/model/apod';

@Component({
  selector: 'ed-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  apod: Apod;

  constructor() { }

  ngOnInit() {
    this.apod = {
      title:"Dragon Aurora over Norway",
      date: "2018-04-10",
      explanation:"What's that in the sky? An aurora. A large coronal hole opened last month, a few days before this image was taken, throwing a cloud of fast moving electrons, protons, and ions toward the Earth. Some of this cloud impacted our Earth's magnetosphere and resulted in spectacular auroras being seen at high northern latitudes. Featured here is a particularly photogenic auroral curtain captured above Tromsø Norway. To the astrophotographer, this shimmering green glow of recombining atmospheric oxygen appeared as a large dragon, but feel free to share what it looks like to you.  Although now past Solar Maximum, our Sun continues to show occasional activity creating impressive auroras on Earth visible even last week.",
      url: "https://apod.nasa.gov/apod/image/1804/DragonAurora_Bastoni_960.jpg",
      hdurl:"https://apod.nasa.gov/apod/image/1804/DragonAurora_Bastoni_4240.jpg",
      media_type:"image",
      service_version:"v1"
    }
  }

}
