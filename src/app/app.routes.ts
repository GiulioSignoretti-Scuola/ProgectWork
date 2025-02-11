import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { VassoioComponent } from './components/vassoio/vassoio.component';

export const routes: Routes = [
    {path: 'Home', component: HomeComponent},
    { path: 'vassoio', component: VassoioComponent },
    { path: '', component:WelcomeComponent }
];
