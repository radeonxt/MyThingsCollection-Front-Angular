import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Jogo } from './jogo.model';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  baseUrl : String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<Jogo[]>{
    const url = `${this.baseUrl}/jogos`
    return this.http.get<Jogo[]>(url)
  }

  findById(id:String):Observable<Jogo>{
    const url = `${this.baseUrl}/jogos/${id}`
    return this.http.get<Jogo>(url)
  }

  delete(id:String): Observable<void> {
    const url = `${this.baseUrl}/jogos/${id}`
    return this.http.delete<void>(url)
  }

  create(jogo: Jogo): Observable<Jogo>{
    const url = `${this.baseUrl}/jogos`
    return this.http.post<Jogo>(url,jogo);
  }

  update(jogo: Jogo):Observable<void>{
    const url = `${this.baseUrl}/jogos/${jogo.id}` 
    return this.http.put<void>(url,jogo);
  }

  mensagem(str:string):void{
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition:'end',
      verticalPosition:'top',
      duration: 3000
    })

  }
}
