import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoaderComponent } from 'src/shared/loader/loader.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, UsersComponent, LoaderComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
