import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from '../../core/services/helper';

@Component({
  selector: 'mfe-navigation-s1-intro-component',
  template: '<router-outlet></router-outlet>'
})
export class RequestComponent implements OnInit {

  constructor(
    private helper: HelperService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.helper.setParentRoute(this.activatedRoute.parent?.snapshot?.routeConfig?.path);
  }

}