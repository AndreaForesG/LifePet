import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

  posts = [
    { title: 'Mi gato juega con un ovillo', content: 'Hoy mi gato decidió jugar con un ovillo de lana. ¡Fue muy divertido!' },
    { title: 'Perro paseando en el parque', content: 'Salí a pasear con mi perro y conocimos a otros perros amigables.' },
    { title: 'Visita al veterinario', content: 'Llevé a mi conejo al veterinario para su chequeo mensual.' }
  ];

  addPost(newPost: any) {
    this.postService.addPost(newPost);
    this.posts = this.postService.getPosts(); // Actualizar la lista de publicaciones
  }


}
