import { Routes } from '@angular/router';
import { NotFound } from './components/not-found/not-found';
import { PersonList } from './components/person-list/person-list';

export const routes: Routes = [
  { path: '', component: PersonList },
  { path: '**', component: NotFound },
];
