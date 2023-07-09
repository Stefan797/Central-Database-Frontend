import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.sass']
})
export class AllTodosComponent implements OnInit {
  
  todos: any = [];
  
  error = '';

  constructor(private httpService: HttpService) {}

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
    return lastValueFrom(this.httpService.getrequest(url));
  }

}
