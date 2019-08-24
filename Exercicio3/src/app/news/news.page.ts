import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  
  public items: Array<{ titulo: string; subtitulo: string, imagem:string }> = [];
  
  constructor() { 
    
  }
  enviaTitulo(titulo:string, subtitulo:string, imagem : string){
    this.items.push({titulo:titulo, subtitulo:subtitulo, imagem:imagem
    })
    
   
  }



  ngOnInit() {
  }

}
