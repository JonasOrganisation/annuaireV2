import { computed, Service, signal } from '@angular/core';
import { Person } from '../models/persons.model';

@Service()
export class FavoriteServiceService {
  readonly uuids = signal<string[]>(JSON.parse(localStorage.getItem('favorites') ?? '[]'));
  readonly count = computed(() => this.uuids().length);

  isFav(uuid: string): boolean {
    return this.uuids().includes(uuid);
  }
  clear(): void {
    this.uuids.set([]);
  }
  addFav(id: string): void {
    this.uuids.update((els) =>
      els.includes(id) ? els.filter((i) => i !== id) : [...this.uuids(), id],
    );
    localStorage.setItem('favorites', JSON.stringify(this.uuids()));
  }
}
