import { Component, inject } from '@angular/core';
import { PeopleApiService } from '../../services/people-api.service';
import { PersonCard } from '../person-card/person-card';

@Component({
  imports: [PersonCard],
  selector: 'app-person-list',
  styleUrl: './person-list.css',
  templateUrl: './person-list.html',
})
export class PersonList {
  apiService = inject(PeopleApiService);
  people = this.apiService.people;
  count = this.apiService.count;
}
