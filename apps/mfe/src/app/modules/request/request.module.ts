import { isPlatformBrowser } from '@angular/common';
import { Inject, NgModule, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EntryGuard } from '../../core/guards/entry';
import { OneTrust } from '../../core/services/onetrust';
import { SharedModule } from '../../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { RequestComponent } from './request.component';
import { S12IntroChildrenComponent } from './s1-intro/s1-2-intro-children/s1-2-intro-children.page';
import { S1IntroComponent } from './s1-intro/s1-intro/s1-intro.page';
import { S1Component } from './s1-intro/s1.page';
import { S2LocationComponent } from './s2-location/s2-location.page';
import { S3OtherLocationComponent } from './s3-other-location/s3-other-location.page';

@NgModule({
  declarations: [
    RequestComponent,
    S1Component,
    S1IntroComponent,
    S12IntroChildrenComponent,
    S2LocationComponent,
    S3OtherLocationComponent
  ],
  imports: [
    SharedModule,
    ComponentsModule,
    RouterModule.forChild([
      { path: '', component: RequestComponent, children: [
        { path: '', redirectTo: 's1', pathMatch: 'full' },
        { path: 's1', component: S1Component, canActivate: [EntryGuard],
          children: [
            { path: '', component: S1IntroComponent },
            { path: '2/children', component: S12IntroChildrenComponent }
          ]
        },
        { path: 'location/s2', component: S2LocationComponent },
        { path: 'location/s3/search', component: S3OtherLocationComponent }
      ]}
    ]),
  ],
  providers: [],
})
export class RequestModule {

  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private onetrust: OneTrust
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.onetrust.init();
    }
  }

}