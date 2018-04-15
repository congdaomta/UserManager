import { FormsModule } from '@angular/forms';
import { RoleComponent } from './roles/role/role.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { CoresModule } from './cores/cores.module';
import { UsersModule } from './users/users.module';
import { SharedModule } from './shared/shared.module';

import { UserService } from './shared/services/user-service/user.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UsersModule,
    RolesModule,
    AuthModule,
    HttpModule,
    SharedModule,
    AngularFontAwesomeModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [
    UserService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
