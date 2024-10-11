import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlog2Component } from './add-blog2/add-blog2.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { AddCommentsComponent } from './add-comments/add-comments.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';
  
const routes: Routes = [
  {
    path:'addBlog',
    component:AddBlog2Component
  },
  {
    path:'',
    component:BlogListComponent
  },
  // {
  //   path:'addComment',
  //   component:AddCommentsComponent
  // },
  {
    path:'viewBlog/:id',
    component:ViewBlogComponent
  },
  {
    path:'addComment/:id',
    component:AddCommentsComponent
  },
  {
    path:'blogList',
    component:BlogListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
