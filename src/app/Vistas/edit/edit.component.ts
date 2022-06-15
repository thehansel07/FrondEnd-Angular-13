import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Modelo/update.interface';
import { UsuarioI } from 'src/app/Modelo/usuario.interface';
import { ApiService } from 'src/app/servicios/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id!: number;
  // usuario!: UsuarioI;
  form!: FormGroup;

  usuario: UsuarioI = {
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
  };

  constructor(
    public api: ApiService,
    private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idUsuario'];
    this.api.FilterUserById(this.id).subscribe((data: UsuarioI)=>{
      this.usuario = data.result;
      console.log(data.result);
    });

    this.form = new FormGroup({
      idUsuario: new FormControl('',[Validators.required]),
      usuNombre: new FormControl('',[Validators.required]),
      usuApellido: new FormControl('',[Validators.required]),
      usuNumDocumento: new FormControl('',[Validators.required]),
      usuDireccion: new FormControl('',[Validators.required]),
      usuTelefono: new FormControl('',[Validators.required]),
      usuEmail: new FormControl('',[Validators.required]),
      usuContraseña: new FormControl('',[Validators.required]),
      usuContraseñaConfirma: new FormControl('',[Validators.required])
      });
  }

  submit(){
    this.api.update(this.form.value).subscribe((res:any) => {

      Swal.fire(
        'Good job!',
        'Usuario Creado Correctamente!',
        'success'
      );

      this.router.navigateByUrl('listarusuarios');
    })
  }

}
