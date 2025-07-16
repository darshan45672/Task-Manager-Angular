import { Component } from '@angular/core';
import { Preloader } from '../../ui_components/preloader/preloader';
import { Sidebar } from '../../ui_components/includes/sidebar/sidebar';
import { BottomNavBar } from '../../ui_components/includes/bottom-nav-bar/bottom-nav-bar';

@Component({
  selector: 'app-home',
  imports: [Preloader, Sidebar, BottomNavBar],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
