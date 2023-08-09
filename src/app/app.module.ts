import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { GalleryHomeComponent } from './components/gallery-home/gallery-home.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogHomeComponent,
    FooterComponent,
    HomeComponent,
    GalleryHomeComponent
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
