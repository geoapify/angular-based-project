import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-my-map',
  templateUrl: './my-map.component.html',
  styleUrls: ['./my-map.component.scss']
})
export class MyMapComponent implements OnInit {

  @ViewChild('map')
  private mapContainer: ElementRef<HTMLElement>;

  constructor() { }

  ngOnInit() {
  }

}
