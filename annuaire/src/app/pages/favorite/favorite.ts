import { Component, inject, computed } from '@angular/core';
import { PeopleApiService } from '../../services/people-api.service';
import { PersonCard } from '../../components/person-card/person-card';
import { FavoriteServiceService } from '../../services/favorite-service.service';
import { AsyncState } from '../../async-state/async-state';

@Component({
  imports: [PersonCard, AsyncState],
  selector: 'app-favorite',
  styleUrl: './favorite.css',
  templateUrl: './favorite.html',
})
export class Favorite {
  apiService = inject(PeopleApiService);
  favorites = inject(FavoriteServiceService);

  people = this.apiService.people;
  count = this.apiService.count;
  loading = this.apiService.loading;
  error = this.apiService.error;

  // toggleFavorite = output<Person>();
  // favorite = input(false);

  favoritePeople = computed(() => {
    const favpeople = this.apiService.people().filter((el) => this.favorites.isFav(el.login.uuid));
    return favpeople;
  });
}
