import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jogo } from '../jogo.model';
import { JogoService } from '../jogo.service';

@Component({
  selector: 'app-jogo-delete',
  templateUrl: './jogo-delete.component.html',
  styleUrls: ['./jogo-delete.component.css']
})
export class JogoDeleteComponent implements OnInit {

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
    this.delete();
  }

  delete():void{
    this.service.delete(this.jogo.id!).subscribe(resposta => {
      this.router.navigate(["jogos"]);
      this.service.mensagem("Jogo deletado com sucesso");   
    }, err => {
        this.router.navigate(["jogos"]);
        this.service.mensagem("Jogo não pode ser deletado");
    })
  }

}
