import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';
import { LogListComponent } from './log-list/log-list.component';
import { LogMainBodyComponent } from './log-main-body/log-main-body.component';
import { LogQueryFormComponent } from './log-query-form/log-query-form.component';
@NgModule({
  declarations: [
    AppComponent,
    LogListComponent,
    LogMainBodyComponent,
    LogQueryFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
