import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  formRegistro:FormGroup
  hide = true

  constructor(
    private fb:FormBuilder
  ){
    this.formRegistro = this.fb.group({
      nombre:["",[Validators.required]],
      apellido:["",[Validators.required]],
      telefono:[""],
      email:["",[Validators.required]],
      password:["",[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
    })
  }

  registrarse(){
    console.log(this.formRegistro.value)
  }


}
