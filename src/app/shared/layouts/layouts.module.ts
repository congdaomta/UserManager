import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout/layout.component';
import { ComponentsModule } from './../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent]
})
export class LayoutsModule { }
