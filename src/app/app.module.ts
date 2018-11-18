import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EndpointService } from 'endpoint-lib';
import { MoviesLibModule } from 'movies-lib';
import { LoginLibModule, FakeBackendInterceptor, BasicAuthInterceptor } from 'login-lib';


// Initialize the enpoint service loading the enpoint.json from the system.
export function init_app(firstLoadService: EndpointService) {
  return () => firstLoadService.init();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginLibModule,
    MoviesLibModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true },
    EndpointService,
  { provide: APP_INITIALIZER, useFactory: init_app, deps: [EndpointService], multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
