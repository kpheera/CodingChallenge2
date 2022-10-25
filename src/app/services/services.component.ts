import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private scroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  goToSection(data: any){
    this.scroller.scrollToAnchor(data);
  }

}
