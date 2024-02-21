import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';

const routes: Routes = [
  { path: 'input', component: InputComponent },
  { path: 'output', component: OutputComponent },
  { path: '', redirectTo: '/input', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
