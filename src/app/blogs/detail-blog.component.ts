import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute, Params} from '@angular/router';

import {BlogService} from '../service/blog.service';

import {Blog} from '../model/blog';
// import {BLOGS} from './mock-blogs';

@Component({
  selector: 'app-detail-blog',
  templateUrl: './detail-blog.component.html',
  styleUrls: ['./detail-blog.component.css'],  
  providers: [BlogService]
})

export class DetailBlogComponent implements OnInit {

  blog: Blog = null;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,) { }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
          let id = +params['id'];
          this.blog = this.blogService.getBlog(id); // on utilise le service pour récupérer un blog en fonction de son identifiant.
        });
      }
    
}
