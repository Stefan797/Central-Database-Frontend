import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AllTodosComponent } from './components/all-todos/all-todos.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { IndexcardsComponent } from './components/indexcards/indexcards.component';
import { ContentComponent } from './components/content/content.component';
import { MainComponent } from './components/main/main.component';

import { AuthInterceptorService } from './services/auth-interceptor.service';
import { EnglishComponent } from './components/english/english.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AllTodosComponent,
    IndexcardsComponent,
    ContentComponent,
    MainComponent,
    EnglishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
