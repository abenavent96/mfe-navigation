import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mfe-navigation-mets-layout-component',
  templateUrl: './mets-layout.component.html',
  styleUrls: ['./mets-layout.component.scss']
})
export class MetsLayoutComponent implements OnInit {

  @Input() titleName = '';
  @Input() showCloseButton = true;
  @Input() backUrl = '';
  @Input() progressBar: number | null = null;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    console.log('init layout');
  }

  onBack() {
    if (this.backUrl) {
      this.router.navigateByUrl(this.backUrl);
    }
  }

  onClose() {
    console.log('onclose');
  }

}
