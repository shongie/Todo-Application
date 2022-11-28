import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from './components/register/register.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import{TodoComponent } from './components/todo/todo.component';
import{TodoAddComponent} from './components/todo-add/todo-add.component';
import{ TodoEditComponent} from './components/todo-edit/todo-edit.component';




const routes: Routes = [

  //  {path: "login", component:LoginComponent},
  {path:"login", component:LoginComponent},
  {path:"", redirectTo:"/login", pathMatch:'full'},
  {path:"register", component:RegisterComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"todo",component:TodoComponent},
  {path:"todo-add",component:TodoAddComponent},
  {path:"todo-edit",component: TodoEditComponent},
 

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
