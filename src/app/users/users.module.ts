import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { UserComponent } from './user/user.component';
import { UserGridComponent } from './user-grid/user-grid.component';
import { UserFormComponent } from './user-form/user-form.component';

import { LayoutsModule } from './../shared/layouts/layouts.module';
import { ComponentsModule } from './../shared/components/components.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { UserCreateComponent } from './user-create/user-create.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    UserComponent,
    UserGridComponent,
    UserFormComponent,
    UserCreateComponent
  ]
})
export class UsersModule { }
