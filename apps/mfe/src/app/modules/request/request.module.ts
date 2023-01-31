import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { S1IntroComponent } from './s1-intro/s1-intro.page';
import { S2LocationComponent } from './s2-location/s2-location.page';
import { S3OtherLocationComponent } from './s3-other-location/s3-other-location.page';

@NgModule({
  declarations: [
    S1IntroComponent,
    S2LocationComponent,
    S3OtherLocationComponent
  ],
  imports: [
    SharedModule,
    ComponentsModule,
    RouterModule.forChild([
      { path: '', redirectTo: 's1', pathMatch: 'full' },
      { path: 's1', component: S1IntroComponent },
      { path: 'location/s2', component: S2LocationComponent },
      { path: 'location/s3/search', component: S3OtherLocationComponent }
    ]),
  ],
  providers: [],
})
export class RequestModule {}