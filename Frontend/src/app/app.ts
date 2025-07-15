import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Preloader } from './ui_components/preloader/preloader';
import { Sidebar } from './ui_components/includes/sidebar/sidebar';
import { BottomNavBar } from './ui_components/includes/bottom-nav-bar/bottom-nav-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Preloader, Sidebar, BottomNavBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Frontend';
}
