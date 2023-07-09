import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTodosComponent } from './components/all-todos/all-todos.component';
import { LoginComponent } from './components/login/login.component';
import { ContentComponent } from './components/content/content.component';
import { IndexcardsComponent } from './components/indexcards/indexcards.component';
import { EnglishComponent } from './components/english/english.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'home', component: ContentComponent},
  { path: 'english-page', component: EnglishComponent},
  { path: 'indexcards', component: IndexcardsComponent},
  { path: 'todos', component: AllTodosComponent},
  { path: 'login', component: LoginComponent},
  //{ path: 'register', component: RegisterComponent},
  { path: '**', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
