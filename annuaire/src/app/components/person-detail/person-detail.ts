import { Component, input, computed, inject } from '@angular/core';
import { PeopleApiService } from '../../services/people-api.service';
import { RouterLink } from '@angular/router';
import { AsyncState } from '../../async-state/async-state';
@Component({
  imports: [RouterLink, AsyncState],
  selector: 'app-person-detail',
  styleUrl: './person-detail.css',
  templateUrl: './person-detail.html',
})
export class PersonDetail {
  private readonly apiService = inject(PeopleApiService);
  uuid = input.required<string>();
  people = computed(() => this.apiService.people().find((p) => p.login.uuid === this.uuid()));
  loading = this.apiService.loading;
  error = this.apiService.error;
}
