import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsModule } from './layouts/layouts.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutsModule,
    ComponentsModule
  ],
  declarations: [],
  providers: [],
  exports: [
    LayoutsModule,
    ComponentsModule
  ]
})
export class SharedModule { }
