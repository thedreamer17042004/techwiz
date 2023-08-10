import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { DetailBlogComponent } from './pages/detail-blog/detail-blog.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'blog', component:BlogComponent},
  {path: 'blog/blog-detail', component:DetailBlogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
