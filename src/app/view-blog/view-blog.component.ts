import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../../Service/data-store.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

ActivatedRoute
@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrl: './view-blog.component.css'
})
export class ViewBlogComponent implements OnInit{
  // tempArr:any[]=[];
  tempArr:any
  constructor(private dataService:DataStoreService ,private router:ActivatedRoute , private rout: Router){}

  userId:any

ngOnInit(): void {
  
  let id=this.router.snapshot.paramMap.get("id")
  this.userId=id
  this.getSingleBlog(this.userId);

}

getSingleBlog(id:any){
  this.dataService.getSingleBlog(id).subscribe((res: any)=>{
    this.tempArr = res
    // console.log(this.tempArr);
    console.log(res);
    console.log(this.tempArr.fullName)
  }); 
}
addComment(id:any){
  this.rout.navigate(['addComment/'+id])
}

goBack() {
  window.history.back();
}

}
