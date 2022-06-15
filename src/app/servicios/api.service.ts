import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginI } from '../Modelo/login.interface';
import {  Observable, throwError } from 'rxjs';
import { RespuestaI } from '../Modelo/RespuestaI.interface';
import { UsuarioI } from '../Modelo/usuario.interface';
import { catchError } from 'rxjs/operators';
import { User } from '../Modelo/update.interface';
import { Vuelos } from '../Modelo/vuelos.interface';
import { Pais } from '../Modelo/pais.interface';
import { VuelosCreate } from '../Modelo/VuelosCreate.inteface';
import { UsuarioAuth } from '../Modelo/usuariosAuth.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string="https://localhost:44326/api/";

  constructor(private httpClient:HttpClient) { }
  //Model
  model:UsuarioI;
  modelVuelos:Vuelos;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   //Login
  loginByEmail(form:LoginI):Observable<RespuestaI>{
    let direcccion=this.url+"Usuarios/Login";
    return this.httpClient.post<RespuestaI>(direcccion,form);

  }

  //Obtener por Id Usuarios
  FilterUserById(id:any):Observable<UsuarioAuth>{
    let direcccion=this.url+"Usuarios/ObtenerPorIdUsuario/"+id;
    return this.httpClient.get<UsuarioAuth>(direcccion);
  }

  //Obtener todos Usuarios
  // GetAllUsers():Observable<UsuarioI[]>{
  //   let direcccion=this.url+"Usuarios/Listar";
  //   return this.httpClient.get<UsuarioI[]>(direcccion);
  // }


  //True Get All
  GetAllUsers(): Observable<UsuarioI[]> {
    let direcccion=this.url+"Usuarios/Listar";
    return this.httpClient.get<UsuarioI[]>(direcccion)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(usuario): Observable<UsuarioI> {
    let direcccion=this.url+"Usuarios/Agregar";
    return this.httpClient.post<UsuarioI>(direcccion, JSON.stringify(usuario), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  //Guardar
  SaveUser(saveUserForm:UsuarioI):Observable<UsuarioI>{
    let direcccion=this.url+"Usuarios/Actualizar";
    return this.httpClient.put<UsuarioI>(direcccion,saveUserForm);

  }

  //Eliminar
  RemoveUser(id:any):Observable<UsuarioI>{
    let direcccion=this.url+"Usuarios/Eliminar/"+id;
    return this.httpClient.delete<UsuarioI>(direcccion);
  }

  update(usuario:any): Observable<User> {
    this.model=usuario
    console.log(this.model);
    let direcccion=this.url+"Usuarios/Actualizar";
    return this.httpClient.put<User>(direcccion, JSON.stringify(this.model), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  updateCurrent(saveUserForm:any): Observable<UsuarioI> {
    let direcccion=this.url+"Usuarios/Actualizar/";
    return this.httpClient.put<UsuarioI>(direcccion + saveUserForm, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  // update(id, post): Observable<Post> {
  //   return this.httpClient.put<Post>(this.apiURL + '/posts/' + id, JSON.stringify(post), this.httpOptions)
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






  GetAllVuelos(): Observable<Vuelos[]> {
    let direcccion=this.url+"Vuelos/Listar";
    return this.httpClient.get<Vuelos[]>(direcccion)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  GetAllPaises(): Observable<Pais[]> {
    let direcccion=this.url+"Vuelos/ListarPaises";
    return this.httpClient.get<Pais[]>(direcccion)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  createVuelos(vuelos): Observable<VuelosCreate> {
    let direcccion=this.url+"Vuelos/Agregar";
    return this.httpClient.post<VuelosCreate>(direcccion, JSON.stringify(vuelos), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  //Faltante API
  updateVuelos(vuelos:any): Observable<VuelosCreate> {
    this.modelVuelos=vuelos
    console.log(this.modelVuelos);
    let direcccion=this.url+"Vuelos/Actualizar";
    return this.httpClient.put<VuelosCreate>(direcccion, JSON.stringify(this.modelVuelos), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

    //Obtener por Id Usuarios
    FilterVuelosById(id:any):Observable<Vuelos>{
      let direcccion=this.url+"Vuelos/ObtenerPorIdVuelos/"+id;
      return this.httpClient.get<Vuelos>(direcccion);
    }


      //Eliminar
      RemoveVuelos(id:any):Observable<Vuelos>{
        let direcccion=this.url+"Vuelos/Eliminar/"+id;
        return this.httpClient.delete<Vuelos>(direcccion);
      }








  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }

}
