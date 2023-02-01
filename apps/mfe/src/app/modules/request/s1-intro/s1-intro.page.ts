import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'mfe-navigation-s1-intro-component',
  templateUrl: 's1-intro.page.html',
  styleUrls: ['s1-intro.page.scss']
})
export class S1IntroComponent implements OnInit {

  assetsUrl = __webpack_public_path__;
  @HostBinding("style.--imageUrl") imageUrl =  `url('${__webpack_public_path__}assets/integrations/mets/included.svg')`;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.init();
  }

  onContinue() {
    if (typeof window !== undefined) {
      const customEvent = new CustomEvent('multimap:event', { detail: { data: 'page 1 to 2', namespace: 'mfe-navigation'} });
      window.dispatchEvent(customEvent)
    }
    this.router.navigate(['location/s2'], { relativeTo: this.route.parent });
  }

  private init() {
    this.route.data.subscribe(o => {
      console.log(o);
    })
  }

}
