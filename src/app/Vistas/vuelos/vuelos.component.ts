import { Component, OnInit } from '@angular/core';
import { Vuelos } from 'src/app/Modelo/vuelos.interface';
import { ApiService } from 'src/app/servicios/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.css']
})
export class VuelosComponent implements OnInit {
  vuelos: Vuelos[] = [];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.GetAllVuelos().subscribe((data: Vuelos[])=>{
      this.vuelos = data;
      console.log(this.vuelos);
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
        this.api.RemoveVuelos(id).subscribe(res => {

          this.vuelos = this.vuelos.filter(item => item.idVuelos !== id);
          Swal.fire(
           'Good job!',
           'Usuario Eliminado Correctamente!',
           'success'
         );

       })
      }
    })

  }

}
