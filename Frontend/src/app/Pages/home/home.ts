import { Component } from '@angular/core';
import { Preloader } from '../../ui_components/preloader/preloader';
import { Sidebar } from '../../ui_components/includes/sidebar/sidebar';
import { BottomNavBar } from '../../ui_components/includes/bottom-nav-bar/bottom-nav-bar';
import { RouterModule } from '@angular/router';
import { TodaysTask } from '../../ui_components/tasks/todays-task/todays-task';
import { RecentProject } from '../../ui_components/tasks/recent-project/recent-project';

@Component({
  selector: 'app-home',
  imports: [Preloader, Sidebar, BottomNavBar, RouterModule, TodaysTask, RecentProject],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
