import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginI } from 'src/app/Modelo/login.interface';
import { RespuestaI } from 'src/app/Modelo/RespuestaI.interface';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm=new FormGroup({
    Correo: new FormControl('',Validators.required),
    Contraseña: new FormControl('',Validators.required)
  });


  constructor(private api:ApiService, private router:Router) { }
  errorStatus:boolean=false;
  errorMsj:any="";

  ngOnInit(): void {
    this.checkLocalStorage();
  }


  checkLocalStorage(){
    if(localStorage.getItem('token')){
     this.router.navigate(["dashboard"]);
    }
  }



  onLogin(form:LoginI){
    this.api.loginByEmail(form).subscribe(data => {
      let dataResponse:RespuestaI=data;
      if(dataResponse.result[0].estado == "Ok"){
       localStorage.setItem("token",dataResponse.token);
       localStorage.setItem("tipoUsu",dataResponse.tipoUsu);
       console.log(dataResponse.tipoUsu);
       localStorage.setItem("id",dataResponse.result[0].id);
       console.log(dataResponse);
       this.router.navigate(["dashboard"]);
      }
      else{
        this.errorStatus=true;
        this.errorMsj=dataResponse.result[0].resultado;
        console.log(dataResponse);
      }
    })

}

}
