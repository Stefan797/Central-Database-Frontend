import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-indexcards',
  templateUrl: './indexcards.component.html',
  styleUrls: ['./indexcards.component.sass']
})
export class IndexcardsComponent implements OnInit {
  
  indexcards: any = [];
  
  error = '';

  constructor(private httpService: HttpService) {}

  async ngOnInit() {
    try {
      this.indexcards = await this.loadIndexCards();
      console.log(this.indexcards);
    } catch (e) {
      this.error = 'Fehler beim Laden!';
    }
  }

  loadIndexCards() {
    const url = environment.baseUrl + "/indexcards/";
    return lastValueFrom(this.httpService.getrequest(url));
  }
}
