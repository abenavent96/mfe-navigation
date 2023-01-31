import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'mfe-navigation-s2-location-component',
  templateUrl: 's2-location.page.html',
  styleUrls: ['s2-location.page.scss']
})
export class S2LocationComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log('init page 2');
  }

  onContinue() {
    this.router.navigate(['location/s3/search'], { relativeTo: this.route.parent });
  }

}
