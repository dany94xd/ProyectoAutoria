import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../../services/data-api.service';
import{UserInterface} from '../../../models/user-interface';
import{NgForm} from '@angular/forms';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(private dataApiService: DataApiService) { }
  private usuarios: UserInterface;
  pageActual: number = 1;
  public myCounter: number = 0;
  ngOnInit() {
    this.getListUsuarios();
  }

  getListUsuarios(): void {
    this.dataApiService
      .getAllUsuarios()
      .subscribe((usuarios: UserInterface) => (this.usuarios = usuarios));
  }

  onDeleteUsuario(id: string): void {
    if (confirm('Are you sure to delete?')) {
      this.dataApiService.deleteUsuario(id).subscribe();
    }
  }

  onPreUpdateUsuario(usuario: UserInterface): void {
    this.dataApiService.selectedUsuario = Object.assign({}, usuario);
  }

  resetForm(usuarioForm?: NgForm): void {
    this.dataApiService.selectedUsuario = {
      id: null,
      name:'',
      tipo:'',
      password:'',
      edad:'',
      idusuario:'',
      email:''
    };
  }

}
