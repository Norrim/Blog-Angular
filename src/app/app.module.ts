import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import {BlogModule} from './blogs/blog.module'

import { AppRoutingModule } from './/app-routing.module';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './service/in-memory-data.service';

import { BlogService } from './service/blog.service';


import { AppComponent } from './app.component';


import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BlogModule,
    HttpModule,
    BrowserModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
