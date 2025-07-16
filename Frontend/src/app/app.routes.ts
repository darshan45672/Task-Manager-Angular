import { Routes } from '@angular/router';
import { ProjectDetails } from './Pages/project-details/project-details';
import { Home } from './Pages/home/home';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'project-details', component: ProjectDetails },
];
