import { NgModule } from '@angular/core';

// Modules
import { CommonModule } from '@angular/common';
import { MetsLayoutComponent } from './mets-layout/mets-layout.component';
import { SharedModule } from '../../shared/shared.module';

const DECLARATIONS: any[] = [
  MetsLayoutComponent
];

@NgModule({
  declarations: [...DECLARATIONS],
  exports: [...DECLARATIONS],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ComponentsModule { }
