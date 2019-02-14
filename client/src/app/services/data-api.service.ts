import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

import { BookInterface } from '../models/book-interface';

import { AuthService } from './auth.service';
import { EventoInterface } from '../models/evento-interface';
import { RecintoInterface } from '../models/recinto-interface';

import { LocalidadInterface } from '../models/localidad-interface';


@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  constructor(private http: HttpClient, private authService: AuthService) { }
  books: Observable<any>;
  book: Observable<any>;

eventos:Observable<any>;
evento:Observable<any>;

recintos:Observable<any>;
recinto:Observable<any>;








localidades:Observable<any>;
localidad:Observable<any>;

  public selectedBook: BookInterface = {
    id: null,
    titulo: '',
    idioma: '',
    descripcion: '',
    portada: '',
    precio: '',
    link_amazon: '',
    autor: '',
    oferta: ''
  };

  public selectedEvento:EventoInterface={

   id:null,
   titulo:'',
   fecha:'',
   hora:'',
   descripcion:'',
   portada:'',
   precio:'',
   estado:'',
   caracter:'',
   idevento:'',
   idrecinto:''

  };

  public selectedRecinto:RecintoInterface={
    idrecinto:null,
    nombre:'',
    direccion:'',
    descripcion:''
  };

  public selectedLocalidad:LocalidadInterface={
    idlocalidad:null,
    idrecinto:'',
    caracter:'',
    descripcion:''
  };

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: this.authService.getToken()
  });

  getAllBooks() {
    const url_api = `http://localhost:3000/api/books`;
    return this.http.get(url_api);
  }

getAllEventos(){
  const url_api= `http://localhost:3000/api/eventos`;
  return this.http.get(url_api);
}

getAllRecintos(){
const url_api= `http://localhost:3000/api/recintos`;
return this.http.get(url_api);
}

getAllLocalidades(){
  const url_api= `http://localhost:3000/api/localidades`;
  return this.http.get(url_api);
  }

  getNotOffers() {
    const url_api = `http://localhost:3000/api/books?filter[where][oferta]=0`;
    return this.http.get(url_api);
  }
  getBookById(id: string) {
    const url_api = `http://localhost:3000/api/books/${id}`;
    return (this.book = this.http.get(url_api));
  }

  getEventoById(id:string){
    const url_api=`http://localhost:3000/api/eventos/${id}`;
    return (this.evento = this.http.get(url_api))
  }

  getRecintoById(id:string){
    const url_api=`http://localhost:3000/api/recintos/${id}`;
    return (this.recinto = this.http.get(url_api))
  }

  getLocalidadById(id:string){
    const url_api=`http://localhost:3000/api/localidades/${id}`;
    return (this.localidad = this.http.get(url_api))
  }

  getOffers() {
    const url_api = `http://localhost:3000/api/books?filter[where][oferta]=1`;
    return (this.books = this.http.get(url_api));
  }

  saveBook(book: BookInterface) {
    // TODO: obtener token
    // TODO: not null
    const token = this.authService.getToken();
    const url_api = `http://localhost:3000/api/books?access_token=${token}`;
    return this.http
      .post<BookInterface>(url_api, book, { headers: this.headers })
      .pipe(map(data => data));
  }


  saveEvento(evento:EventoInterface){
    const token = this.authService.getToken();
    const url_api = `http://localhost:3000/api/eventos?access_token=${token}`;
    return this.http
    .post<EventoInterface>(url_api,evento,{headers:this.headers})
    .pipe(map(data=>data));
  }

  saveRecinto(recinto:RecintoInterface){
    const token = this.authService.getToken();
    const url_api = `http://localhost:3000/api/recintos?access_token=${token}`;
    return this.http
    .post<RecintoInterface>(url_api,recinto,{headers:this.headers})
    .pipe(map(data=>data));
  }

  saveLocalidad(localidad:LocalidadInterface){
    const token = this.authService.getToken();
    const url_api = `http://localhost:3000/api/localidades?access_token=${token}`;
    return this.http
    .post<LocalidadInterface>(url_api,localidad,{headers:this.headers})
    .pipe(map(data=>data));
  }

  updateBook(book) {
    // TODO: obtener token
    // TODO: not null
    const bookId = book.bookId;
    const token = this.authService.getToken();
    const url_api = `http://localhost:3000/api/books/${bookId}/?access_token=${token}`;
    return this.http
      .put<BookInterface>(url_api, book, { headers: this.headers })
      .pipe(map(data => data));
  }

updateEvento(evento){
  const eventoId= evento.eventoId;
  const token= this.authService.getToken();
  const url_api=`http://localhost:3000/api/eventos/${eventoId}/?access_token=${token}`;
  return this.http
  .put<EventoInterface>(url_api,evento ,{headers:this.headers})
  .pipe(map(data=>data));
}

updateRecinto(recinto){
  const recintoId= recinto.recintoId;
  const token= this.authService.getToken();
  const url_api=`http://localhost:3000/api/recintos/${recintoId}/?access_token=${token}`;
  return this.http
  .put<RecintoInterface>(url_api,recinto ,{headers:this.headers})
  .pipe(map(data=>data));
}

updateLocalidad(localidad){
  const localidadId= localidad.localidadId;
  const token= this.authService.getToken();
  const url_api=`http://localhost:3000/api/localidades/${localidadId}/?access_token=${token}`;
  return this.http
  .put<LocalidadInterface>(url_api,localidad ,{headers:this.headers})
  .pipe(map(data=>data));
}

  deleteBook(id: string) {
    // TODO: obtener token
    // TODO: not null
    const token = this.authService.getToken();
    console.log(token);
    const url_api = `http://localhost:3000/api/books/${id}/?access_token=${token}`;
    return this.http
      .delete<BookInterface>(url_api, { headers: this.headers })
      .pipe(map(data => data));
    }



deleteEvento(id:string){
  const token = this.authService.getToken();
  const url_api = `http://localhost:3000/api/eventos/${id}/?access_token=${token}`;
  return this.http
  .delete<EventoInterface>(url_api,{headers:this.headers})
  .pipe(map(data=>data));
}

deleteRecinto(id:string){
  const token = this.authService.getToken();
  const url_api = `http://localhost:3000/api/recintos/${id}/?access_token=${token}`;
  return this.http
  .delete<RecintoInterface>(url_api,{headers:this.headers})
  .pipe(map(data=>data));
}

deleteLocalidad(id:string){
  const token = this.authService.getToken();
  const url_api = `http://localhost:3000/api/localidades/${id}/?access_token=${token}`;
  return this.http
  .delete<LocalidadInterface>(url_api,{headers:this.headers})
  .pipe(map(data=>data));
}
}
