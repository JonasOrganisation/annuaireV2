import { HttpClient } from '@angular/common/http';
import { Service, inject, signal, computed } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Person, PersonResponse } from '../models/persons.model';

@Service()
export class PeopleApiService {
  private readonly http = inject(HttpClient);
  private readonly url = 'https://randomuser.me/api/?seed=cda2&results=30&nat=fr';
  error = signal<string | null>(null);
  loading = signal(false);
  people = signal<Person[]>([]);
  readonly count = computed(() => this.people().length);

  constructor() {
    this.load();
  }
  async load(): Promise<void> {
    this.error.set(null);
    this.loading.set(true);
    try {
      const response = await firstValueFrom(this.http.get<PersonResponse>(this.url));
      this.people.set(response.results);
    } catch (err) {
      this.error.set('Impossible de charger cet annuaire');
    } finally {
      this.loading.set(false);
    }
  }
}
