import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFontAwesomeModule } from 'angular-font-awesome';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/user/nosotros/nosotros.component';
import { ContactanosComponent } from './components/user/contactanos/contactanos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OffersComponent } from './components/offers/offers.component';
import { HeroComponent } from './components/hero/hero.component';
import { DetailsBookComponent } from './components/details-book/details-book.component';
import { ListBooksComponent } from './components/admin/list-books/list-books.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// Services
import { DataApiService } from 'src/app/services/data-api.service';
import { ModalComponent } from './components/modal/modal.component';
import { TruncateTextPipe } from './pipes/truncate-text.pipe';

// Externals
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListEventosComponent } from './components/admin/list-eventos/list-eventos.component';
import { DetailsEventoComponent } from './components/details-evento/details-evento.component';
import { ListRecintosComponent } from './components/admin/list-recintos/list-recintos.component';
import { ListTarifaComponent } from './components/admin/list-tarifa/list-tarifa.component';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    NosotrosComponent,
    ContactanosComponent,
    NavbarComponent,
    OffersComponent,
    HeroComponent,
    DetailsBookComponent,
    ListBooksComponent,
    ListEventosComponent,
    DetailsEventoComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    Page404Component,
    ModalComponent,
    TruncateTextPipe,
    ListEventosComponent,
    DetailsEventoComponent,
    ListRecintosComponent,
    ListTarifaComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, NgxSpinnerModule, NgxPaginationModule, AngularFontAwesomeModule, MDBBootstrapModule.forRoot()],
  providers: [DataApiService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
