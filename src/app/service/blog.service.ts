import { Injectable } from '@angular/core';
// import { Headers, Http } from '@angular/http';
// import 'rxjs/add/operator/toPromise';

// import { Observable } from 'rxjs/Rx';
// import { of } from 'rxjs/observable/of';

import { Blog } from '../model/blog';
import {BLOGS} from '../blogs/mock-blogs'

@Injectable()
export class BlogService {
  
  // constructor(private http: Http) { }
  //Avec le mock-blogs
  getBlogs(): Blog[] {
    return BLOGS;
  }

  getBlog(id:number){
    let blogs = this.getBlogs();

    for(let index = 0; index < blogs.length; index++) {
      if(id === blogs[index].id) {
        return blogs[index];
      }
    }

  }


  // private handleError(error: any): Promise<any> {
  //   console.error('An error occurred', error);
  //   return Promise.reject(error.message || error);
  // }
}
