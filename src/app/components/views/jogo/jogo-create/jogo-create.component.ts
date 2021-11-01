import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jogo } from '../jogo.model';
import { JogoService } from '../jogo.service';

@Component({
  selector: 'app-jogo-create',
  templateUrl: './jogo-create.component.html',
  styleUrls: ['./jogo-create.component.css']
})
export class JogoCreateComponent implements OnInit {

  jogo: Jogo = {
    nome : '',
    genero: '',
    produtora: ''
  }

  constructor(private service: JogoService, private router: Router) { }

  ngOnInit(): void {
  }

  create():void {
    this.service.create(this.jogo).subscribe((resposta) => {
      this.router.navigate(["jogos"]);
      this.service.mensagem("Jogo criada com sucesso");      
    }, err => {
      for (let i = 0; i< err.error.errors.length; i++) {
        this.service.mensagem(err.error.errors[i].defaultMessage)
      }
    })
  }

  cancel():void {
    this.router.navigate(["jogos"]);
  }

}
