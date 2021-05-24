import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponents } from './layout.index';

@NgModule({
  declarations: [LayoutComponents],
  imports: [CommonModule, RouterModule],
  exports: [LayoutComponents],
  providers: [],
})
export class LayoutModule {}
