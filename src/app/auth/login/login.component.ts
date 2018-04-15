import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  onSubmit(value: any) {
    console.log(value);
  }
}
