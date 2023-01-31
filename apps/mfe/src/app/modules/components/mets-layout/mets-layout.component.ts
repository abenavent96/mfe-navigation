import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'mfe-navigation-mets-layout-component',
  templateUrl: './mets-layout.component.html',
  styleUrls: ['./mets-layout.component.scss']
})
export class MetsLayoutComponent implements OnInit {

  assetsUrl = __webpack_public_path__;

  @Input() titleName = '';
  @Input() showCloseButton = true;
  @Input() backUrl = '';
  @Input() progressBar: number | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log('init layout');
  }

  onBack() {
    if (this.backUrl) {
      this.router.navigate([this.backUrl], { relativeTo: this.route.parent });
    } else {
      // TODO
      this.router.navigate(['', { relativeTo: this.route.parent }]);
    }
  }

  onClose() {
    console.log('onclose');
  }

}
