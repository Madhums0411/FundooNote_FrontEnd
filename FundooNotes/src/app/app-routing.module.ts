import { createComponentDefinitionMap } from '@angular/compiler/src/render3/partial/component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './components/archive/archive.component';
import { CreatenoteComponent } from './components/createnote/createnote.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { GetallnotesComponent } from './components/getallnotes/getallnotes.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { TrashComponent } from './components/trash/trash.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'forgot',component:ForgotpasswordComponent},
  {path:'reset',component:ResetpasswordComponent},
 
  {path:'dashboard',component:DashboardComponent,
children:[
  {path:'Notes',component:GetallnotesComponent},
  {path:'create',component:CreatenoteComponent},
  {path:'Archive',component:ArchiveComponent},
  {path:'Trash',component:TrashComponent}
]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
