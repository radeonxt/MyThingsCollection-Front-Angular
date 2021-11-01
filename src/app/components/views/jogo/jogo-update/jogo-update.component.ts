import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jogo } from '../jogo.model';
import { JogoService } from '../jogo.service';

@Component({
  selector: 'app-jogo-update',
  templateUrl: './jogo-update.component.html',
  styleUrls: ['./jogo-update.component.css']
})
export class JogoUpdateComponent implements OnInit {
  jogo: Jogo = {
    nome : '',
    genero: '',
    produtora: '',
    ano: 0,
    nota: 0
  }

  constructor(private service: JogoService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.jogo.id = this.route.snapshot.paramMap.get('id')!;
    this.findbyId();
  }

  findbyId(){
    this.service.findById(this.jogo.id!).subscribe((resposta) => {
      this.jogo.nome = resposta.nome
      this.jogo.genero = resposta.genero
      this.jogo.produtora = resposta.produtora
      this.jogo.ano = resposta.ano
      this.jogo.nota = resposta.nota
    })
  }

  update(){
    this.service.update(this.jogo).subscribe((resposta) => {
      this.router.navigate(["jogos"]);
      this.service.mensagem("Jogo atualizado com sucesso");
    }, err => {
      this.service.mensagem("Validar se todos os campos estão preenchidos corretamente");
    })
  }

  cancelar(){
    this.router.navigate(["jogos"]);
  }

}
