import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.css']
})
export class CreatePostsComponent implements OnInit {

  post = {
    title: '',
    content: '',
    image: ''
  };  


  constructor(private postService: PostService,
    
    
  ) { }

  ngOnInit(): void {
  }

 
  onSubmit() {
    // Aquí puedes simular el almacenamiento de la publicación
    const newPost = {
      ...this.post,
      id: Date.now() // Generar un ID único temporal
    };
    
    // Simular la adición de la publicación en el array de publicaciones
    this.postService.addPost(newPost);
    
    // Reiniciar el formulario
    this.post = {
      title: '',
      content: '',
      image: ''
      };
    }
}
