import { Component, inject } from '@angular/core';
import { PeopleApiService } from '../../services/people-api.service';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  apiService = inject(PeopleApiService);
  count = this.apiService.count;
}
