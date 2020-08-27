import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from "@angular/core";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as Sentry from "@sentry/angular";

// This is where custom libraries will be overridden 
// by Sentry's error handler instead of Angular's error handler

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: true,
      }),
    },


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
