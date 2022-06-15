import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Vistas/login/login.component';
import { DashboardComponent } from './Vistas/dashboard/dashboard.component';
import { PerfilComponent } from './Vistas/perfil/perfil.component';
import { PersonasComponent } from './Vistas/personas/personas.component';
import { ListarusuariosComponent } from './Vistas/listarusuarios/listarusuarios.component';
import { CreateComponent } from './Vistas/create/create.component';
import { EditComponent } from './Vistas/edit/edit.component';
import { DeleteComponent } from './Vistas/delete/delete.component';
import { ViajeComponent } from './Vistas/viaje/viaje.component';
import { VuelosComponent } from './Vistas/vuelos/vuelos.component';
import { CreateVuelosComponent } from './Vistas/create-vuelos/create-vuelos.component';
import { VueloseditComponent } from './Vistas/vuelosedit/vuelosedit.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'perfil',component:PerfilComponent},
  {path:'personas',component:PersonasComponent},
  {path:'listarusuarios',component:ListarusuariosComponent},
  {path:'create',component:CreateComponent},
  { path: 'vistas/:idUsuario/edit', component: EditComponent },
  {path:'viaje',component:ViajeComponent},
  {path:'vuelos',component:VuelosComponent},
  {path:'createVuelos',component:CreateVuelosComponent},
  { path: 'vistas/:idVuelos/vuelosedit', component: VueloseditComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  LoginComponent,
  DashboardComponent,
  PerfilComponent,
  PersonasComponent,
  ListarusuariosComponent,
  CreateComponent,
  EditComponent,
  DeleteComponent,
  ViajeComponent,
  VuelosComponent,
  CreateVuelosComponent,
  VueloseditComponent
  ];
