import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'mfe-navigation-s3-other-location-component',
  templateUrl: 's3-other-location.page.html',
  styleUrls: ['s3-other-location.page.scss']
})
export class S3OtherLocationComponent implements OnInit {

  assetUrl = __webpack_public_path__;
  iframeUrl: SafeResourceUrl | null = null;

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
    this.onLoadIframe();
  }

  onContinue() {
    console.log('on continue s3');
  }

  onLoadIframe() {
    this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.multimap.pre.mapfredigitalhealth.com/integraciones/mets?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IjA2NzcwNzUyTiIsInZlcmlmaWVkIjp0cnVlLCJtYXBmcmVfaWQiOiI1ZWNmZTdmOS0yZTM3LTQxZDEtYTBiZS1lMmZmNGVhNzA5NDYiLCJzdWJzY3JpcHRpb25fc2NoZW1hIjoiU3Vic2NyaXB0aW9uLURlc2lnbmVyIiwiYWdlbnRfaWQiOm51bGwsImV4cCI6MTY3NTA5MDg0Niwib3JpZ19pYXQiOjE2NzUwODM2NDYsImNoYW5uZWwiOiJNQVBGUkUiLCJpc190ZWN1aWRhbW9zX2FncmVlbWVudCI6ZmFsc2UsInRlbmFudCI6Im11bHRpbWFwIn0.yV2vILMzs0jasalvEqfhML_aFMqJUktHqxOCWESnRDI&origin=mets&my_requests_button=true');
  }

}
