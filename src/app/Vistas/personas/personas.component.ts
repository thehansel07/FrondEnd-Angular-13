import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioI } from 'src/app/Modelo/usuario.interface';
import { ApiService } from 'src/app/servicios/api.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
 // usuario:UsuarioI[]=[];
  usuario: UsuarioI;
  id: number;


  constructor(private api:ApiService,  private router:Router, private _location: Location) {
    console.log(this.usuario);
  }

  ngOnInit(): void {
    this.id = +localStorage.getItem('id');
    this.initDetail();
    // this.api.FilterUserById(this.id).subscribe((data: UsuarioI)=>{
    //   console.log(data);
    //   this.usuario = data.result;
    // })
  }


  initDetail()
  {
    this.api.FilterUserById(this.id).subscribe((data: UsuarioI)=>{
      console.log(data);
      this.usuario = data.result;
  })}

  goToDashboard(){
    this._location.back();

  }








}
