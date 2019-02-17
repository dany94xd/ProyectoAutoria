import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

import {BookInterface } from '../models/book-interface';
import {TarifaInterface} from '../models/tarifa-interface';
import {FilaInterface} from '../models/fila-interface';
import { AsientoInterface } from '../models/asiento-interface';


import { AuthService } from './auth.service';
import { EventoInterface } from '../models/evento-interface';
import { RecintoInterface } from '../models/recinto-interface';

import { LocalidadInterface } from '../models/localidad-interface';

import { PrecioInterface } from '../models/precio-interface';

import { BloqueInterface } from '../models/bloque-interface';

import { TicketInterface } from '../models/ticket-interface';


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

precios:Observable<any>;
precio:Observable<any>;

localidades:Observable<any>;
localidad:Observable<any>;

tarifas:Observable<any>;
tarifa:Observable<any>;

<<<<<<< HEAD

asientos:Observable<any>;
asiento:Observable<any>;




=======
>>>>>>> b4eeed2e69ab295e5226bdc3cc49288d52caa309
bloques:Observable<any>;
bloque:Observable<any>;

filas:Observable<any>;
fila:Observable<any>;

tickets:Observable<any>;
ticket:Observable<any>;

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

  public selectedFila: FilaInterface={

    id:null,
    idfila:'',
    idbloque:'',
    nombre:''

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
    id:null,
    nombre:'',
    direccion:'',
    descripcion:''
  };

  public selectedLocalidad:LocalidadInterface={
    id:null,
    idlocalidad:'',
    idrecinto:'',
    caracter:'',
    descripcion:''
  };

  public selectedBloque:BloqueInterface={
    id:null,
    idbloque:'',
    idlocalidad:"",
    descripcion:''
  };

  public selectedTarifa:TarifaInterface={
    id:null,
    descripcion:'',
    caracter:''
  };

  public selectedPrecio:PrecioInterface={
    id: null,
    nombre:'',
    idevento:'',
    idlocalidad:'',
    valor:''
  };

  public selectedTicket:TicketInterface={
    id: null,
    idticket:'', 
    idevento:'',
    idprecio:'',
    idtarifa:'',
    idasiento:'',
    valor:'',
    codigo:''
  };







  public selectedAsiento:AsientoInterface={
    id: null,
    idasiento:'',
    idfila:'',
    nombre:''
  };


  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: this.authService.getToken()
  });


  //metodo de traer obetos con get

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

getAllBloques(){
  const url_api= `http://localhost:3000/api/bloques`;
  return this.http.get(url_api);
}

getAllTarifas(){
  const url_api= `http://localhost:3000/api/tarifas`;
  return this.http.get(url_api);
  }
  
getAllFilas(){
  const url_api= `http://localhost:3000/api/filas`;
  return this.http.get(url_api);
}

getAllPrecios(){
  const url_api= `http://localhost:3000/api/precios`;
  return this.http.get(url_api);
}

<<<<<<< HEAD
getAllAsientos(){
  const url_api= `http://localhost:3000/api/asientos`;
=======
getAllTickets(){
  const url_api= `http://localhost:3000/api/tickets`;
>>>>>>> b4eeed2e69ab295e5226bdc3cc49288d52caa309
  return this.http.get(url_api);
}

///////////////////////////////////////////////////////////////////////////////7
//metodo traer select de ofertas
  getNotOffers() {
    const url_api = `http://localhost:3000/api/books?filter[where][oferta]=0`;
    return this.http.get(url_api);
  }


  getOffers() {
    const url_api = `http://localhost:3000/api/books?filter[where][oferta]=1`;
    return (this.books = this.http.get(url_api));
  }

/////////////////////////////////////////////////////////////////7
// metodo select por id  
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

  getBloqueById(id:string){
    const url_api=`http://localhost:3000/api/bloques/${id}`;
    return (this.bloque = this.http.get(url_api))
  }

  
  getTarifaById(id:string){
    const url_api=`http://localhost:3000/api/tarifas/${id}`;
    return (this.tarifas = this.http.get(url_api))
  }

getFilaById(id:string){
  const url_api=`http://localhost:3000/api/filas/${id}`;
  return (this.filas = this.http.get(url_api))
}

getPrecioById(id:string){
  const url_api=`http://localhost:3000/api/precios/${id}`;
  return (this.precios = this.http.get(url_api))
}

getTicketById(id:string){
  const url_api=`http://localhost:3000/api/tickets/${id}`;
  return (this.precios = this.http.get(url_api))
}

getAsientoById(id:string){
  const url_api=`http://localhost:3000/api/asientos/${id}`;
  return (this.asientos = this.http.get(url_api))
}

////////////////////////////////////////////////////////////
// metodo guardar por post

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

  saveBloque(bloque:BloqueInterface){
    const token = this.authService.getToken();
    const url_api = `http://localhost:3000/api/bloques?access_token=${token}`;
    return this.http
    .post<BloqueInterface>(url_api,bloque,{headers:this.headers})
    .pipe(map(data=>data));
  }


  saveTarifa(tarifa:TarifaInterface){
    const token = this.authService.getToken();
    const url_api = `http://localhost:3000/api/tarifas?access_token=${token}`;
    return this.http
    .post<TarifaInterface>(url_api,tarifa,{headers:this.headers})
    .pipe(map(data=>data));
  }

  saveFila(fila:FilaInterface){
    const token = this.authService.getToken();
    const url_api = `http://localhost:3000/api/filas?access_token=${token}`;
    return this.http
    .post<FilaInterface>(url_api,fila,{headers:this.headers})
    .pipe(map(data=>data));
  }

  savePrecio(precio:PrecioInterface){
    const token = this.authService.getToken();
    const url_api = `http://localhost:3000/api/precios?access_token=${token}`;
    return this.http
    .post<PrecioInterface>(url_api,precio,{headers:this.headers})
    .pipe(map(data=>data));
  }

<<<<<<< HEAD
  saveAsiento(asiento:AsientoInterface){
    const token = this.authService.getToken();
    const url_api = `http://localhost:3000/api/asientos?access_token=${token}`;
    return this.http
    .post<AsientoInterface>(url_api,asiento,{headers:this.headers})
=======
  saveTicket(ticket:TicketInterface){
    const token = this.authService.getToken();
    const url_api = `http://localhost:3000/api/tickets?access_token=${token}`;
    return this.http
    .post<TicketInterface>(url_api,ticket,{headers:this.headers})
>>>>>>> b4eeed2e69ab295e5226bdc3cc49288d52caa309
    .pipe(map(data=>data));
  }

////////////////////////////////////////////////////////////////////////////
// metodo put actualizar tablas
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
  .put<LocalidadInterface>(url_api,localidad,{headers:this.headers})
  .pipe(map(data=>data));
}

updateBloque(bloque){
  const bloqueId= bloque.bloqueId;
  const token= this.authService.getToken();
  const url_api=`http://localhost:3000/api/bloques/${bloqueId}/?access_token=${token}`;
  return this.http
  .put<BloqueInterface>(url_api,bloque ,{headers:this.headers})
  .pipe(map(data=>data));
}

updateTarifa(tarifa){
  const tarifaId= tarifa.tarifaId;
  const token= this.authService.getToken();
  const url_api=`http://localhost:3000/api/tarifas/${tarifaId}/?access_token=${token}`;
  return this.http
  .put<TarifaInterface>(url_api,tarifa ,{headers:this.headers})
  .pipe(map(data=>data));
}

updateFila(fila){
  const filaId= fila.filaId;
  const token= this.authService.getToken();
  const url_api=`http://localhost:3000/api/filas/${filaId}/?access_token=${token}`;
  return this.http
  .put<FilaInterface>(url_api,fila ,{headers:this.headers})
  .pipe(map(data=>data));
}

updatePrecio(precio){
  const precioId= precio.precioId;
  const token= this.authService.getToken();
  const url_api=`http://localhost:3000/api/precios/${precioId}/?access_token=${token}`;
  return this.http
  .put<PrecioInterface>(url_api,precio ,{headers:this.headers})
  .pipe(map(data=>data));
}

<<<<<<< HEAD
updateAsiento(asiento){
  const asientoId= asiento.asientoId;
  const token= this.authService.getToken();
  const url_api=`http://localhost:3000/api/asientos/${asientoId}/?access_token=${token}`;
  return this.http
  .put<AsientoInterface>(url_api,asiento ,{headers:this.headers})
  .pipe(map(data=>data));
}



=======
updateTicket(ticket){
  const ticketId= ticket.ticketId;
  const token= this.authService.getToken();
  const url_api=`http://localhost:3000/api/tickets/${ticketId}/?access_token=${token}`;
  return this.http
  .put<TicketInterface>(url_api,ticket ,{headers:this.headers})
  .pipe(map(data=>data));
}
>>>>>>> b4eeed2e69ab295e5226bdc3cc49288d52caa309


//////////////////////////////////////////////////////////////////////777777
// metodos borrar delete

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

deleteBloque(id:string){
  const token = this.authService.getToken();
  const url_api = `http://localhost:3000/api/bloques/${id}/?access_token=${token}`;
  return this.http
  .delete<BloqueInterface>(url_api,{headers:this.headers})
  .pipe(map(data=>data));
}

deleteTarifa(id:string){
  const token = this.authService.getToken();
  const url_api = `http://localhost:3000/api/tarifas/${id}/?access_token=${token}`;
  return this.http
  .delete<TarifaInterface>(url_api,{headers:this.headers})
  .pipe(map(data=>data));
}

deleteFila(id:string){
  const token = this.authService.getToken();
  const url_api = `http://localhost:3000/api/filas/${id}/?access_token=${token}`;
  return this.http
  .delete<FilaInterface>(url_api,{headers:this.headers})
  .pipe(map(data=>data));
}

deletePrecio(id:string){
  const token = this.authService.getToken();
  const url_api = `http://localhost:3000/api/precios/${id}/?access_token=${token}`;
  return this.http
  .delete<PrecioInterface>(url_api,{headers:this.headers})
  .pipe(map(data=>data));
}

<<<<<<< HEAD


deleteAsiento(id:string){
  const token = this.authService.getToken();
  const url_api = `http://localhost:3000/api/asientos/${id}/?access_token=${token}`;
  return this.http
  .delete<AsientoInterface>(url_api,{headers:this.headers})
  .pipe(map(data=>data));
}


=======
deleteTicket(id:string){
  const token = this.authService.getToken();
  const url_api = `http://localhost:3000/api/tickets/${id}/?access_token=${token}`;
  return this.http
  .delete<TicketInterface>(url_api,{headers:this.headers})
  .pipe(map(data=>data));
}
>>>>>>> b4eeed2e69ab295e5226bdc3cc49288d52caa309


}
