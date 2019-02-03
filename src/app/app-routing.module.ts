import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BiographyComponent }  from './biography/biography.component';
import { AlpinismComponent }  from './alpinism/alpinism.component';
import { IntroComponent }  from './intro/intro.component';
import { StpetersbourgComponent }  from './stpetersbourg/stpetersbourg.component';
import { NorwayComponent }  from './norway/norway.component';

const appRoutes: Routes = [
  { path: 'biography', component: BiographyComponent },
  { path: 'stpetersbourg', component: StpetersbourgComponent },
  { path: 'norway', component: NorwayComponent },
  { path: 'alpinism', component: AlpinismComponent },
  { path: '**', component: IntroComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }