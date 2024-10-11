import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { response } from 'express';
import { Observable, map } from 'rxjs';

export interface Comments{
  fullName :any;  
  comments : any; 
  rate:any
}
export interface ApiResponse {
  [key: string]: BlogDetails;
}

export interface BlogDetails {

  blogTitle:string
  fullName:string
  articalDate:string
  rate:string
  image:string
  description: string
  comment:Comments

}

@Injectable({
  providedIn: 'root'
})
export class DataStoreService implements OnInit{

  apiLink='http://localhost:3000/blogList';

  constructor(private http:HttpClient) { }

  ngOnInit(): void { }

  flag=true
  value:any

  addBlog(blog: any) :Observable<any>{
    return this.http.post('http://localhost:3000/blogList', blog.value);
  }

  
  getblogList():Observable<any>{
    return this.http.get('http://localhost:3000/blogList');
  }


  getSingleBlog(id:any):Observable<any> {
    return this.http.get('http://localhost:3000/blogList/'+id);
  }

  deleteSingleBlog(id:any):Observable<any> {
    return this.http.delete('http://localhost:3000/blogList/'+id);
  }

  updateSingleUser(id: any, data: any): Observable<any> {
    const url = `http://localhost:3000/blogList/${id}`;
    return this.http.put(url, data);
  }


  getCommnetsByUserId(id:any):Observable<any> {
    return this.http.get('http://localhost:3000/blogList/'+id);
  }
  getCommnetsByUserIdFromComments(id:any):Observable<any>{

    return this.http.get('http://localhost:3000/comments/'+id);
    
  }


  // addComment(id: any, cmt: any):Observable<any> {
  //   const url = `http://localhost:3000/blogList/${id}`;
  //   return this.http.post(url, cmt);
  // }

  baseUrl='http://localhost:3000/blogList'


  // addComment(id: string, comment: any): Observable<any> {
  //   const url = `${this.baseUrl}/blogList/${id}/comment/`;
  //   return this.http.post(url, comment);
  // }
 

 

  // addComment(id:any, comment: any):Observable<any> {
  //   return this.http.post('http://localhost:3000/blogList/'+id+'/comment', comment);

  // }
  // addComment(id: string, comment: any): Observable<any> {
  //   console.log("SERVICE FILE")
  //   console.log(comment)
  //   return this.http.patch(`http://localhost:3000/blogList/${id}/comment`, comment);
  // }

  addComment(id: string, comment: any): Observable<any> {
    console.log("SERVICE FILE")
    console.log(comment)
    return this.http.post(`http://localhost:3000/comments`, comment);
  }

  goBack() {
    window.history.back();
  }

}
