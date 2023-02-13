import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from '../../../../core/services/helper';

@Component({
  selector: 'mfe-navigation-s1-2-intro-children-component',
  templateUrl: 's1-2-intro-children.page.html',
  styleUrls: ['s1-2-intro-children.page.scss']
})
export class S12IntroChildrenComponent implements OnInit {
  @HostBinding("style.--imageUrl") imageUrl =  `url('${__webpack_public_path__}assets/integrations/mets/included.svg')`;

  constructor(
    private router: Router,
    public route: ActivatedRoute,
    public helper: HelperService
  ) { }

  ngOnInit() {
    this.init();
  }

  onContinue() {
    if (typeof window !== undefined) {
      const customEvent = new CustomEvent('multimap:event', { detail: { data: 'page 1 children to 2', namespace: 'mfe-navigation'} });
      window.dispatchEvent(customEvent)
    }
    this.router.navigate(['location/s2'], { relativeTo: this.route.parent?.parent });
  }

  private init() {
    this.route.data.subscribe(o => {
      console.log(o);
    })
  }

}
