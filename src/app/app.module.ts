import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Button } from './Button/button.component';
import { Header } from './Header/header.component';
import { List } from './List/list.component';
import { Menu } from './Menu/menu.component';
import { Tasks } from './Tasks/tasks.component';
import { Contacts } from './Contacts/contacts.component';
import { ListContacts } from './ListContacts/listcontacts.component';

@NgModule({
  declarations: [
    AppComponent,
    Button,
    Header,
    List,
    Menu,
    Tasks,
    Contacts,
    ListContacts
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
