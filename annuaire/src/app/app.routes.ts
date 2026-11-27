import { Routes } from '@angular/router';
import { NotFound } from './components/not-found/not-found';
import { PersonList } from './components/person-list/person-list';
import { PersonDetail } from './pages/person-detail/person-detail';
import { Favorite } from './pages/favorite/favorite';

export const routes: Routes = [
  { path: '', component: PersonList },
  { path: 'favorite', component: Favorite },
  { path: 'personnes/:uuid', component: PersonDetail },
  { path: '**', component: NotFound },
];
