import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserFormComponent } from './user-form/user-form.component';
import { UserComponent } from './user/user.component';
import { UserCreateComponent } from './user-create/user-create.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  // components Host multil view
  { path: 'user/create', component: UserCreateComponent },
  { path: 'user/:id', component: UserFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
