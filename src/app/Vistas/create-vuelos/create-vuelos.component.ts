import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pais } from 'src/app/Modelo/pais.interface';
import { ApiService } from 'src/app/servicios/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-vuelos',
  templateUrl: './create-vuelos.component.html',
  styleUrls: ['./create-vuelos.component.css']
})
export class CreateVuelosComponent implements OnInit {

  form!: FormGroup;
  paisList: Pais[] = [];

  constructor(private api:ApiService,  private router:Router) { }

  ngOnInit(): void {
    this.api.GetAllPaises().subscribe((data: Pais[])=>{
      this.paisList = data;
    });

    this.form = new FormGroup({
    idPaisOrigenVuelo: new FormControl('',[Validators.required]),
    idPaisDestinoVuelo: new FormControl('',[Validators.required]),
    cantPersonasVuelo: new FormControl('',[Validators.required]),
    fechaInicial: new FormControl('',[Validators.required]),
    fechaFinal: new FormControl('',[Validators.required]),
    });


  }

  submitVuelos(){
    console.log(this.form.value);
    this.api.createVuelos(this.form.value).subscribe((res:any) => {
      Swal.fire(
        'Good job!',
        'Vuelo Creado Correctamente!',
        'success'
      );

      this.router.navigateByUrl('vuelos');
    })
  }

}
