import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const DECLARATIONS: any[] = [
  // Components

  // Directives

  // Pipes

];

@NgModule({
  declarations: [
    ...DECLARATIONS
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ...DECLARATIONS
  ],
  providers: [
    DecimalPipe
  ]
})
export class SharedModule {}
