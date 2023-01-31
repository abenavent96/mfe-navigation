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
    console.log('on Continue');
    this.router.navigate(['location/s2'], { relativeTo: this.route.parent });
  }

  private init() {
    console.log('init s1-intro');
    this.route.data.subscribe(o => {
      console.log(o);
    })
  }

}
