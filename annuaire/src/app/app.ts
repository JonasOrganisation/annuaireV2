import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonList } from './components/person-list/person-list';
import { Header } from './components/header/header';

@Component({
  imports: [RouterOutlet, Header],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('annuaire');
}
