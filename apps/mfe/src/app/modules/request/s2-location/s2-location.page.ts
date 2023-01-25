import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mfe-navigation-s2-location-component',
  templateUrl: 's2-location.page.html',
  styleUrls: ['s2-location.page.scss']
})
export class S2LocationComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    console.log('init page 2');
  }

  onContinue() {
    console.log('on continue');
  }

}
