import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jogo } from '../jogo.model';
import { JogoService } from '../jogo.service';

@Component({
  selector: 'app-jogo-read',
  templateUrl: './jogo-read.component.html',
  styleUrls: ['./jogo-read.component.css']
})
export class JogoReadComponent implements OnInit {

  jogos: Jogo[] = [];

  displayedColumns: string[] = ['id', 'nome', 'genero', 'produtora','ano','nota', 'acoes'];

  constructor(private service: JogoService, private router: Router) { 

  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      this.jogos = resposta;
    })
  }

  navegarParaJogoCreate(){
    this.router.navigate(["jogos/create"]);
  }

}
