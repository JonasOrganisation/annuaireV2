import { Component, inject } from '@angular/core';
import { PeopleApiService } from '../../services/people-api.service';
import { FavoriteServiceService } from '../../services/favorite-service.service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  apiService = inject(PeopleApiService);
  count = this.apiService.count;
  favService = inject(FavoriteServiceService);
  countFav = this.favService.count;
}
