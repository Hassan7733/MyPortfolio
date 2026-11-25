import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CaseStudyComponent } from './case-study/case-study.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'case-study/:slug', component: CaseStudyComponent },
  { path: '**', redirectTo: '' },
];
