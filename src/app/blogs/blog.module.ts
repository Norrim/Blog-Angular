import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetailBlogComponent } from './detail-blog.component';
import { BlogsComponent } from './blogs.component'
import { BlogRoutingModule } from './blog-routing.module';
import { BlogService } from '../service/blog.service';


@NgModule({
  declarations: [
    BlogsComponent,
    DetailBlogComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    BlogRoutingModule,
  ],
  providers: [BlogService]
})
export class BlogModule { }