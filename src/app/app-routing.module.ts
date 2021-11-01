import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JogoCreateComponent } from './components/views/jogo/jogo-create/jogo-create.component';
import { JogoReadComponent } from './components/views/jogo/jogo-read/jogo-read.component';
import { JogoDeleteComponent } from './components/views/jogo/jogo-delete/jogo-delete.component';
import { JogoUpdateComponent } from './components/views/jogo/jogo-update/jogo-update.component';
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'jogos',
    component: JogoReadComponent
  }
  ,
  {
    path: 'jogos/create',
    component: JogoCreateComponent
  }
  ,
  {
    path: 'jogos/delete/:id',
    component: JogoDeleteComponent
  }
  ,
  {
    path: 'jogos/update/:id',
    component: JogoUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
