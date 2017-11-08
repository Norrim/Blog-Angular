import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute, Router} from '@angular/router';

import {BlogService} from '../service/blog.service'

import {Blog} from '../model/blog'

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],  
})
export class BlogsComponent implements OnInit {
  blogs: Blog[]= null;

  constructor(
    private blogService: BlogService,
    private router: Router) { }

  ngOnInit(): void {
   this.getBlogs();
  }

  getBlogs():void{
    this.blogs= this.blogService.getBlogs();
  }

}
