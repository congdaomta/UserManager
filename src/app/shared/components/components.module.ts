import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeadersComponent } from './headers/headers.component';
import { SidebarsComponent } from './sidebars/sidebars.component';
import { PageContentComponent } from './page-content/page-content.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeadersComponent,
    SidebarsComponent,
    PageContentComponent
  ],
  exports: [
    HeadersComponent,
    SidebarsComponent,
    PageContentComponent
  ]
})
export class ComponentsModule { }
