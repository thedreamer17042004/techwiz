import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { ContactsComponent } from './components/contacts/contacts.component';

import { BlogComponent } from './pages/blog/blog.component';
import { DetailBlogComponent } from './pages/detail-blog/detail-blog.component';
import { LoginComponent } from './components/login/login.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'blog', component:BlogComponent},
  {path: 'blog/blog-detail', component:DetailBlogComponent},
   {path: 'contact', component: ContactsComponent},
   {path: 'login', component: LoginComponent},
   {path: 'detail', component: DetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
