import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pais } from 'src/app/Modelo/pais.interface';
import { Vuelos } from 'src/app/Modelo/vuelos.interface';
import { ApiService } from 'src/app/servicios/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vuelosedit',
  templateUrl: './vuelosedit.component.html',
  styleUrls: ['./vuelosedit.component.css']
})
export class VueloseditComponent implements OnInit {

  id!: number;
  // vuelos!: Vuelos;

  vuelos: Vuelos = {
  idVuelos:0,
  idPaisOrigenVuelo:0,
  idPaisDestinoVuelo:0,
  cantPersonasVuelo:0,
  fechaInicial:'',
  fechaFinal:'',
  paisOrigenVuelo:'',
  paisDestinoVuelo:'',
  result:[],
};


  form!: FormGroup;
  paisList: Pais[] = [];

  constructor(
    public api: ApiService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idVuelos'];
    this.api.FilterVuelosById(this.id).subscribe((data: Vuelos)=>{
      this.vuelos = data.result;
      console.log(this.vuelos);
    });

    this.api.GetAllPaises().subscribe((data: Pais[])=>{
      this.paisList = data;
      console.log(this.paisList);
    });

    this.form = new FormGroup({
      idVuelos: new FormControl('',[Validators.required]),
      idPaisOrigenVuelo: new FormControl('',[Validators.required]),
      idPaisDestinoVuelo: new FormControl('',[Validators.required]),
      cantPersonasVuelo: new FormControl('',[Validators.required]),
      fechaInicial: new FormControl('',[Validators.required]),
      fechaFinal: new FormControl('',[Validators.required]),
      });
  }


  // changeWebsite(e) {
  //   console.log(e.target.value);
  // }

  // changeWeb(e) {
  //   console.log(e.target.value);
  // }


  submit(){
    this.api.updateVuelos(this.form.value).subscribe((res:any) => {

      Swal.fire(
        'Good job!',
        'Vuelo Actualizado Correctamente!',
        'success'
      );

      this.router.navigateByUrl('vuelos');
    })
  }


}
