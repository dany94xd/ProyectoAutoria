import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  texto: string =  "SI";
  value: string =  "NO";
  estado: boolean = true;

  event: Event;

  onLoad(){

  }

  cambiaEstado() {
    this.texto = (this.estado) ?  "NO" : "SI";
    this.estado= !this.estado; 
  }

  cambiaEstado2(event){
    alert(event.target.id);
    if (this.value == "NO"){
      this.value = "SI";
      this.cambiaEstado();
    }else{
      this.value = "NO";
    }    
  }
  myEvent(event) {
    this.event = event;

    if (event.target.class == "NO"){
      event.target.class = "SI";
      event.target.css = {'background-color': '#6c5'};
      this.onLoad();
      alert(event.target.class);  
      
    }else{
      event.target.class = "NO";
      alert(event.target.class);
      event.target.css = {'background-color': '#933'};
      
    }    
  }

  

  ngOnInit() {
  }
  filas = [
    {
      "fila": "A",

    },
    {
      "fila": "B",  
    },
    {
      "fila": "C",
    },
    {
      "fila": "D",
    },
    {
      "fila": "E",
    }
  ];

}

