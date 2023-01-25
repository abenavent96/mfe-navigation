import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { ComponentsModule } from '../../components/components.module';
import { S1IntroComponent } from './s1-intro.page';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: S1IntroComponent }]),
    ComponentsModule
  ],
  declarations: [S1IntroComponent]
})
export class S1IntroPageModule {}
