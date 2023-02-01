import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'mfe-navigation-s2-location-component',
  templateUrl: 's2-location.page.html',
  styleUrls: ['s2-location.page.scss']
})
export class S2LocationComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  onContinue() {
    console.log('oncontinue')
    if (typeof window !== undefined) {
      const customEvent = new CustomEvent('multimap:event', { detail: { data: 'page 2 to iframe', namespace: 'mfe-navigation'} });
      window.dispatchEvent(customEvent)
    }
    this.router.navigate(['location/s3/search'], { relativeTo: this.route.parent });
  }

}
