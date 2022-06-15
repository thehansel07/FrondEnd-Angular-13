import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioI } from 'src/app/Modelo/usuario.interface';
import { UsuarioAuth } from 'src/app/Modelo/usuariosAuth.interface';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  id!:number;
  typeUser:string;

  model: UsuarioAuth = {
    idUsuario: 0,
    usuNombre: '',
    usuApellidos: '',
    usuNumDocumento: '',
    usuDireccion: '',
    usuTelefono: '',
    usuEmail: '',
    usuContraseña: '',
    usuContraseñaConfirma: '',
    rolesRolId: 0,
    usuCondicion: '',
    rowguid: '',
    usutelefono: '',
    usucondicion: true,
    result: [],
    descricionRol: ''
  };

  condicion:number;

  constructor(private router:Router, private api:ApiService) { }
  ngOnInit(): void {

    this.ValidarUser();

  }

  ClearLocalStore(){
    localStorage.clear();
    this.router.navigate(["login"]);

  }

  GetUserById()
  {
    var id = localStorage.getItem("id");
    this.api.FilterUserById(id).subscribe(data => {
      let dataResponse:UsuarioAuth=data;
      this.model=dataResponse;
      console.log(dataResponse);
          this.router.navigate(["personas"]);

    });

  }

  ValidarUser(){
    var user =localStorage.getItem("tipoUsu");

    if(user == "Administrador"){
      this.condicion = 1;
    }
    else{
      this.condicion = 0;
    }


  }






}
