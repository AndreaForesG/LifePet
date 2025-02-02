import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: any[] = [];

  constructor() { }

  addPost(post: any) {
    this.posts.push(post);
  }

  getPosts() {
    return this.posts;
  }
}
