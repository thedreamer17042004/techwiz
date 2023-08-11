import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutsComponent } from './components/abouts/abouts.component';

import { ProductComponent } from './components/product/product.component';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { OurServicesComponent } from './components/our-services/our-services.component';

import { HttpClientModule } from '@angular/common/http';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { GalleryHomeComponent } from './components/gallery-home/gallery-home.component';

import { ContactsComponent } from './components/contacts/contacts.component';

import { BlogComponent } from './pages/blog/blog.component';
import { DetailBlogComponent } from './pages/detail-blog/detail-blog.component';
import { LoginComponent } from './components/login/login.component';
import { DetailsComponent } from './components/details/details.component';



@NgModule({
  declarations: [
    AppComponent,

    MenuComponent,
    BannerComponent,
    AboutsComponent,


    ProductComponent,
    AssessmentComponent,
    OurServicesComponent,
    BlogHomeComponent,
    FooterComponent,
    HomeComponent,
    GalleryHomeComponent,

    ContactsComponent,

    BlogComponent,
    DetailBlogComponent,
    LoginComponent,
    DetailsComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
