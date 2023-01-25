import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mfe-navigation-s1-intro-component',
  templateUrl: 's1-intro.page.html',
  styleUrls: ['s1-intro.page.scss']
})
export class S1IntroComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.init();
  }

  onContinue() {
    console.log('on Continue');
  }

  private init() {
    console.log('init s1-intro');
  }

}
