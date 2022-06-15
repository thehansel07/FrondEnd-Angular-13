import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioI } from 'src/app/Modelo/usuario.interface';
import { ApiService } from 'src/app/servicios/api.service';
import Swal from 'sweetalert2';
import {Location} from '@angular/common';

@Component({
  selector: 'app-listarusuarios',
  templateUrl: './listarusuarios.component.html',
  styleUrls: ['./listarusuarios.component.css']
})
export class ListarusuariosComponent implements OnInit {
  usuarios: UsuarioI[] = [];



  constructor(private api:ApiService, private _location: Location) { }

  ngOnInit(): void {
    this.api.GetAllUsers().subscribe((data: UsuarioI[])=>{
      this.usuarios = data;
      console.log(this.usuarios);
    })
  }


  deletePost(id:number){

    Swal.fire({
      title: 'Estas seguro que desea eliminar este usuario?',
      text: "Los cambios no seran revertidos!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borra lo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.api.RemoveUser(id).subscribe(res => {

          this.usuarios = this.usuarios.filter(item => item.idUsuario !== id);
          Swal.fire(
           'Good job!',
           'Usuario Eliminado Correctamente!',
           'success'
         );

       })
      }
    })

  }


  goToDashboard(){
    this._location.back();

  }

}
