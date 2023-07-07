import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.sass']
})
export class AllTodosComponent implements OnInit {
  
  todos: any = [];
  
  error = '';

  // Anlegen eines Http servies get post put
  // https://www.telerik.com/blogs/angular-basics-how-to-use-httpclient
  constructor(private http: HttpClient) {}

  async ngOnInit() {
    try {
      this.todos = await this.loadTodos();
      console.log(this.todos);
    } catch (e) {
      this.error = 'Fehler beim Laden!';
    }
  }

  loadTodos() {
    const url = environment.baseUrl + "/todos/";
    return lastValueFrom(this.http.get(url));
  }

}
