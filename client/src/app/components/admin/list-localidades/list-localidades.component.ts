import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {DataApiService} from '../../../services/data-api.service';
import{LocalidadInterface} from '../../../models/localidad-interface';
import{NgForm} from '@angular/forms';
=======
>>>>>>> 368df4881ee6fc3bfe98c25d3101db502e91f55b

@Component({
  selector: 'app-list-localidades',
  templateUrl: './list-localidades.component.html',
<<<<<<< HEAD
  styleUrls: ['./list-localidades.component.css']
})
export class ListLocalidadesComponent implements OnInit {

  constructor(private dataApiService: DataApiService) { }
  private localidades: LocalidadInterface;
  pageActual: number = 1;
  public myCounter: number = 0;
  ngOnInit() {
    this.getListLocalidades();
  }

  getListLocalidades(): void {
    this.dataApiService
      .getAllLocalidades()
      .subscribe((localidades: LocalidadInterface) => (this.localidades = localidades));
  }

  onDeleteLocalidad(id: string): void {
    if (confirm('Are you sure to delete?')) {
      this.dataApiService.deleteLocalidad(id).subscribe();
    }
  }

  onPreUpdateLocalidad(localidad: LocalidadInterface): void {
    this.dataApiService.selectedRecinto = Object.assign({}, localidad);
  }

  resetForm(localidadForm?: NgForm): void {
    this.dataApiService.selectedLocalidad = {
      idlocalidad: null,
      idrecinto:'',
      caracter:'',      
      descripcion:''
     
    };
  }
=======
  styleUrls: ['./list-localidades.component.scss']
})
export class ListLocalidadesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

>>>>>>> 368df4881ee6fc3bfe98c25d3101db502e91f55b
}
