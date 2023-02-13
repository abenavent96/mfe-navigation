import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { HelperService } from '../../../core/services/helper';

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
    private route: ActivatedRoute,
    private helper: HelperService
  ) {}

  onBack() {
    this.backUrl ? this.router.navigate([this.helper.getParentRoute(), this.backUrl]) : this.router.navigate(['/']);
  }

  onClose() {
    this.router.navigate(['/']);
  }

}
