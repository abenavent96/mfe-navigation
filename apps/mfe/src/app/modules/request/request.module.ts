import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { S1IntroComponent } from './s1-intro/s1-intro.page';
import { S2LocationComponent } from './s2-location/s2-location.page';

@NgModule({
  declarations: [
    S1IntroComponent,
    S2LocationComponent
  ],
  imports: [
    SharedModule,
    ComponentsModule,
    RouterModule.forChild([
      { path: '',   redirectTo: 's1', pathMatch: 'full' },
      { path: 's1', component: S1IntroComponent },
      { path: 's2', component: S2LocationComponent }
    ]),
  ],
  providers: [],
})
export class RequestModule {}