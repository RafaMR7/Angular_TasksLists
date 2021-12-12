import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tasks } from './Tasks/tasks.component';
import {Contacts } from './Contacts/contacts.component';

const routes: Routes = [
  {path: 'tasks', component: Tasks},
  {path: 'contacts', component: Contacts}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
