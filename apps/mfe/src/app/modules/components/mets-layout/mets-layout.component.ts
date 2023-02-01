import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'mfe-navigation-mets-layout-component',
  templateUrl: './mets-layout.component.html',
  styleUrls: ['./mets-layout.component.scss']
})
export class MetsLayoutComponent {

  assetsUrl = __webpack_public_path__;

  @Input() titleName = '';
  @Input() showCloseButton = true;
  @Input() backUrl = '';
  @Input() progressBar: number | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onBack() {
    if (this.backUrl) {
      const extras: NavigationExtras | undefined = this.backUrl?.startsWith('/') ? undefined : { relativeTo: this.route.parent };
      this.router.navigate([this.backUrl], extras);
    } else {
      // TODO
      this.router.navigate(['', { relativeTo: this.route.parent }]);
    }
  }

  onClose() {
    console.log('onclose');
  }

}
