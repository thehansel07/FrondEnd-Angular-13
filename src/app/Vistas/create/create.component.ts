import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioI } from 'src/app/Modelo/usuario.interface';
import { ApiService } from 'src/app/servicios/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form!: FormGroup;
  condicion:number;
  typeUser:string;

  constructor(private api:ApiService,  private router:Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
    usuNombre: new FormControl('',[Validators.required]),
    usuApellidos: new FormControl('',[Validators.required]),
    usuNumDocumento: new FormControl('',[Validators.required]),
    usuDireccion: new FormControl('',[Validators.required]),
    usuTelefono: new FormControl('',[Validators.required]),
    usuEmail: new FormControl('',[Validators.required]),
    usuContraseña: new FormControl('',[Validators.required]),
    usuContraseñaConfirma: new FormControl('',[Validators.required]),
    });

    this.ValidarUser();

  }


  ValidarUser(){
    var user =localStorage.getItem("tipoUsu");
    user= this.typeUser;
    if(user == "Administrador"){
      this.condicion = 1;
    }
    else{
      this.condicion = 0;
    }


  }

submit(){
  console.log(this.form.value);
  this.api.create(this.form.value).subscribe((res:any) => {
    Swal.fire(
      'Good job!',
      'Usuario Creado Correctamente!',
      'success'
    );

    this.router.navigateByUrl('listarusuarios');
  })

}

}
