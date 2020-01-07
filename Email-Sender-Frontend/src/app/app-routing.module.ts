import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent } from './components/intro/intro.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ComposeComponent } from './components/compose/compose.component';
import { SentComponent } from './components/sent/sent.component';


const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'compose', component: ComposeComponent },
  { path: 'sent', component: SentComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
