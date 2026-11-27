import { Component, inject, input, output } from '@angular/core';
import { Person } from '../../models/persons.model';
import { RouterLink } from '@angular/router';
import { MatIconButton } from '@angular/material/button';
import { FavoriteServiceService } from '../../services/favorite-service.service';
@Component({
  imports: [RouterLink, MatIconButton],
  selector: 'app-person-card',
  styleUrl: './person-card.css',
  templateUrl: './person-card.html',
})
export class PersonCard {
  person = input.required<Person>();
  toggleFavorite = output<Person>();
  favorite = input(false);
}
