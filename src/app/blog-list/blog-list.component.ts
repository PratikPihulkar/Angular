

import { Component, OnInit } from '@angular/core';
import { DataStoreService, BlogDetails } from '../../Service/data-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent implements OnInit {
  blogList: any[] = [];
  tempArr: any[] = [];
  id: any;

  constructor(private dataService: DataStoreService, private router: Router) {}

  ngOnInit(): void {
    console.log("OnInit");
    this.getblogList();
  }

  public getblogList() {
    console.log("get Called");
    this.dataService.getblogList().subscribe((res) => {
      this.tempArr = res.sort((a: any, b: any) => {
        return new Date(a.articalDate).getTime() - new Date(b.articalDate).getTime();
      });
    });
  }

  viewBlog(id: any) {
    this.router.navigate(['viewBlog/' + id]);
  }

  addComment(id: any) {
    this.router.navigate(['addComment/' + id]);
  }

  deleteBlog(id: any): void {
    alert("Blog Deleted!!");
    this.dataService.deleteSingleBlog(id).subscribe((res) => {});
    this.getblogList();
  }

  goBack() {
    window.history.back();
  }
}
