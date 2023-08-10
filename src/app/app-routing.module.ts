import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { ShopComponent } from './pages/shop/shop.component';


import { AboutPageComponent } from './components/about-page/about-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


import { ContactsComponent } from './components/contacts/contacts.component';

import { BlogComponent } from './pages/blog/blog.component';
import { DetailBlogComponent } from './pages/detail-blog/detail-blog.component';
import { CartComponent } from './pages/cart/cart.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'blog', component:BlogComponent},
  {path: 'blog/blog-detail', component:DetailBlogComponent},
  { path: 'shop', component: ShopComponent },
  {path: 'cart', component:CartComponent},
  {path: 'about', component:AboutUsComponent},

   {path: 'contact', component: ContactsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
