import { Routes } from '@angular/router';
import { NotFound } from './components/not-found/not-found';
import { PersonList } from './components/person-list/person-list';
import { PersonDetail } from './components/person-detail/person-detail';

export const routes: Routes = [
  { path: '', component: PersonList },
  { path: 'personnes/:uuid', component: PersonDetail },
  { path: '**', component: NotFound },
];
