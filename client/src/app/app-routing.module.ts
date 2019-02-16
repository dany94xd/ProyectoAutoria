import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { NosotrosComponent } from 'src/app/components/user/nosotros/nosotros.component';
import { ContactanosComponent } from 'src/app/components/user/contactanos/contactanos.component';
import { OffersComponent } from 'src/app/components/user/offers/offers.component';
import { DetailsBookComponent } from 'src/app/components/details-book/details-book.component';
import { ListBooksComponent } from 'src/app/components/admin/list-books/list-books.component';
import{ListEventosComponent} from 'src/app/components/admin/list-eventos/list-eventos.component';
import{DetailsEventoComponent} from 'src/app/components/details-evento/details-evento.component';

import {ListRecintosComponent} from 'src/app/components/admin/list-recintos/list-recintos.component';
import {ListTarifaComponent} from 'src/app/components/admin/list-tarifa/list-tarifa.component';
import {ListFilasComponent} from 'src/app/components/admin/list-filas/list-filas.component';

import {ListLocalidadesComponent} from 'src/app/components/admin/list-localidades/list-localidades.component';
import {ListPreciosComponent} from 'src/app/components/admin/list-precios/list-precios.component';



import { LoginComponent } from 'src/app/components/user/login/login.component';
import { RegisterComponent } from 'src/app/components/user/register/register.component';
import { ProfileComponent } from 'src/app/components/user/profile/profile.component';
import { Page404Component } from 'src/app/components/page404/page404.component';

import { AuthGuard } from './guards/auth.guard';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'user/offers', component: OffersComponent }, 
  { path: 'book/:id', component: DetailsBookComponent },
  { path: 'admin/list-books', component: ListBooksComponent, canActivate: [AuthGuard] }, // TODO: only users auth
  { path: 'user/login', component: LoginComponent },
  { path: 'user/register', component: RegisterComponent },
  { path: 'user/profile', component: ProfileComponent, canActivate: [AuthGuard] }, // TODO: only users auth
  { path:'evento/:id' , component:DetailsEventoComponent},
  { path:'admin/list-eventos',component:ListEventosComponent,canActivate:[AuthGuard]},
  
  { path:'admin/list-recintos', component: ListRecintosComponent, canActivate:[AuthGuard]},

  { path:'admin/list-localidades', component: ListLocalidadesComponent, canActivate:[AuthGuard]},
  {path:'admin/list-recintos', component: ListRecintosComponent, canActivate:[AuthGuard]},
  {path:'admin/list-tarifa',component:ListTarifaComponent,canActivate:[AuthGuard]},
  {path:'admin/list-filas',component:ListFilasComponent,canActivate:[AuthGuard]},
  {path:'admin/list-precios',component:ListPreciosComponent,canActivate:[AuthGuard]},
  { path: 'user/nosotros', component: NosotrosComponent },
  { path: 'user/contactanos', component: ContactanosComponent },
  { path: '**', component: Page404Component },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
