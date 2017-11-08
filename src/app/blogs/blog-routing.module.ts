import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogsComponent }    from './blogs.component';
import { DetailBlogComponent }  from './detail-blog.component';


// routes definition
const blogsRoutes: Routes = [
	{
		path: 'blog',
		children: [
			{ path: 'all', component: BlogsComponent },
			{ path: ':id', component: DetailBlogComponent }
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(blogsRoutes)
	],
	exports: [
		RouterModule
	]
})
export class BlogRoutingModule { }