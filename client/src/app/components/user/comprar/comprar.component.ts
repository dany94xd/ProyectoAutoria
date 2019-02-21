import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

 
  cantidad : number = 0;
  event: Event;

  onLoad(){

  }

  
  myEvent(event) {
    this.event = event;
    if (event.target.class == "SI"){
        event.target.class = "NO";
        event.target.style.backgroundColor = "goldenrod";
        this.cantidad = this.cantidad - 1;
    //    document.getElementById("canasientos").setAttribute.t
    }else{
      event.target.class = "SI";
      this.cantidad = this.cantidad + 1;
      event.target.style.backgroundColor = "blue";
      
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
    },
    {
      "fila": "F",
    }
  ];

}

