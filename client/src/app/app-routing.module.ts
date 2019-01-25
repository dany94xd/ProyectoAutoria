import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { NosotrosComponent } from 'src/app/components/user/nosotros/nosotros.component';
import { OffersComponent } from 'src/app/components/offers/offers.component';
import { DetailsBookComponent } from 'src/app/components/details-book/details-book.component';
import { ListBooksComponent } from 'src/app/components/admin/list-books/list-books.component';
import{ListEventosComponent} from 'src/app/components/admin/list-eventos/list-eventos.component';
import{DetailsEventoComponent} from 'src/app/components/details-evento/details-evento.component';


import { LoginComponent } from 'src/app/components/user/login/login.component';
import { RegisterComponent } from 'src/app/components/user/register/register.component';
import { ProfileComponent } from 'src/app/components/user/profile/profile.component';
import { Page404Component } from 'src/app/components/page404/page404.component';

import { AuthGuard } from './guards/auth.guard';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'offers', component: OffersComponent, canActivate: [AuthGuard] }, // TODO: only users auth
  { path: 'book/:id', component: DetailsBookComponent },
  { path: 'admin/list-books', component: ListBooksComponent, canActivate: [AuthGuard] }, // TODO: only users auth
  { path: 'user/login', component: LoginComponent },
  { path: 'user/register', component: RegisterComponent },
  { path: 'user/profile', component: ProfileComponent, canActivate: [AuthGuard] }, // TODO: only users auth
<<<<<<< HEAD
  {path:'evento/:id' , component:DetailsEventoComponent},
  {path:'admin/list-eventos',component:ListEventosComponent,canActivate:[AuthGuard]},
=======
  { path: 'user/nosotros', component: NosotrosComponent },
>>>>>>> cac0dc5dd46c125942da42a79cff871c54988ce5
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }