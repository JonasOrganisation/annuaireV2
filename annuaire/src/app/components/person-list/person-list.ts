import { Component, inject, signal, computed } from '@angular/core';
import { PeopleApiService } from '../../services/people-api.service';
import { PersonCard } from '../person-card/person-card';
import { AsyncState } from '../../async-state/async-state';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { FavoriteServiceService } from '../../services/favorite-service.service';

@Component({
  imports: [PersonCard, AsyncState, MatFormField, MatInput],
  selector: 'app-person-list',
  styleUrl: './person-list.css',
  templateUrl: './person-list.html',
})
export class PersonList {
  apiService = inject(PeopleApiService);
  people = this.apiService.people;
  count = this.apiService.count;
  loading = this.apiService.loading;
  error = this.apiService.error;

  search = signal<string>('');
  favorites = inject(FavoriteServiceService);
  onClear(): void {
    this.search.set('');
    // this.filter.set({ search: '' });
  }
  onChange(value: Event): void {
    const input = (value.target as HTMLInputElement).value;
    this.search.set(input);
  }
  visiblePersons = computed(() => {
    const persons = this.apiService.people();
    if (this.search() === '') {
      return persons;
    } else {
      return persons.filter((person) => {
        const fullnameF =
          person.name.first.trim().toLowerCase() + ' ' + person.name.last.trim().toLowerCase();
        const fullnameL =
          person.name.last.trim().toLowerCase() + ' ' + person.name.first.trim().toLowerCase();

        return (
          fullnameF.startsWith(this.search().trim().toLowerCase()) ||
          fullnameL.startsWith(this.search().trim().toLowerCase())
        );
      });
    }
  });
  // filter = signal({ search: '' });
  // filterForm = form(this.filter);
  // visibleFilter = computed(() => {
  //   const test = this.filter().search.trim().toLowerCase();
  //   return this.apiService
  //     .people()
  //     .filter((e) => `${e.name.first} ${e.name.last}`.toLowerCase().includes(test));
  // });
}
