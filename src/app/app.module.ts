import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Vistas/login/login.component';
import { DashboardComponent } from './Vistas/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PerfilComponent } from './Vistas/perfil/perfil.component';
import { PersonasComponent } from './Vistas/personas/personas.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { LinkDirective } from './directives/link.directive';
import { ListarusuariosComponent } from './Vistas/listarusuarios/listarusuarios.component';
import { CreateComponent } from './Vistas/create/create.component';
import { EditComponent } from './Vistas/edit/edit.component';
import { DeleteComponent } from './Vistas/delete/delete.component';
import { ViajeComponent } from './Vistas/viaje/viaje.component';
import { VuelosComponent } from './Vistas/vuelos/vuelos.component';
import { CreateVuelosComponent } from './Vistas/create-vuelos/create-vuelos.component';
import { VueloseditComponent } from './Vistas/vuelosedit/vuelosedit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    routingComponents,
    DashboardComponent,
    PerfilComponent,
    PersonasComponent,
    DropdownDirective,
    LinkDirective,
    ListarusuariosComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent,
    ViajeComponent,
    VuelosComponent,
    CreateVuelosComponent,
    VueloseditComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
