import { Component, Renderer2 } from '@angular/core';
import {  DataStoreService, BlogDetails} from '../../Service/data-store.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-comments',
  templateUrl: './add-comments.component.html',
  styleUrl: './add-comments.component.css'
})
export class AddCommentsComponent{
  addComment!: FormGroup;

 formVisible = false;
 
 userId:any

 cmtArr:any

  constructor(  private fb: FormBuilder, private dataStoreService: DataStoreService, private router: ActivatedRoute) {}

  ngOnInit(): void {
   
    let id=this.router.snapshot.paramMap.get("id")
    this.userId=id
    this.dataStoreService.getSingleBlog(id).subscribe((res)=>{
      this.addComment.patchValue(res) 
    })

    this.addComment = this.fb.group({
      id:this.userId,
      naam: ['', Validators.required ] ,
      readerComment: ['', [Validators.required, Validators.maxLength(200)]], 
      readerRating: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      
    });

    console.log("ID"+this.userId)

    
    this.getCommnetsByUserId(this.userId)
    this.getCommnetsByUserIdFromComments(this.userId)
  }

  goBack() {
    window.history.back();
  }


  openForm() {
    this.formVisible = true;
  }

  closeForm() {
    this.formVisible = false;
  }
  getCommnetsByUserId(id:any){
    this.dataStoreService.getCommnetsByUserId(this.userId).subscribe((res:any)=>{
      this.cmtArr=res.comment
      console.log('success comment Fetched');
      console.log(this.cmtArr)
  });
  }
  cmtArr2:any
  getCommnetsByUserIdFromComments(id:any){
    this.dataStoreService.getCommnetsByUserIdFromComments(this.userId).subscribe((res:any)=>{
      console.log("resss"+res)
      // this.cmtArr.push(res.comment);
      this.cmtArr2=res
      // console.log("cmatArr22"+this.cmtArr2.value);
      this.cmtArr.push(this.cmtArr2)
      // console.log("Again"+this.cmtArr2.value);
      
  });
  }

  
  saveComment() {
    console.log(this.addComment.value);
    this.dataStoreService.addComment(this.userId,this.addComment.value).subscribe(()=>{
      console.log('success',this.addComment);
      alert("Comment Added")
     
  });
  // this.goBack() 
  this.formVisible = false;
  }
  
    
  
}
