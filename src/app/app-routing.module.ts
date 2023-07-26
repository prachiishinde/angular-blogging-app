// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { EventsWebinarsSidebarComponent } from './events-webinars-sidebar/events-webinars-sidebar.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { MyPostMainComponent } from './my-post-main/my-post-main.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component : LoginComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'header', component : HeaderComponent},
  {path: 'events-webinars-sidebar', component: EventsWebinarsSidebarComponent},
  {path: 'blogpost', component:BlogpostComponent},
  {path: 'my-post-main', component: MyPostMainComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}