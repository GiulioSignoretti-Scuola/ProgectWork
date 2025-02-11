import { Routes } from '@angular/router';
import { VassoioComponent } from './components/vassoio/vassoio.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

export const routes: Routes = [
    { path: 'vassoio', component: VassoioComponent },
    { path: '', component:WelcomeComponent }
];
