import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
private caminho:string;
private titulo:object;
  constructor() { 
    this.caminho = "/assets/icon/ol.png";
    
    this.titulo={tituloinicial:"Hello",
                 caixamaior:"Seja bem-vindo!"
                }
  }

  ngOnInit() {
  }

}
