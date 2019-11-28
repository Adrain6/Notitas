import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user : string
  pass: string
  constructor() { }

  onUserChange(value: string) {
    this.user = value
  }
  onPassChange(value: string) {
    this.pass = value
  }

  loginUser() {
    if(this.user == "joan" && this.pass =="123123"){
      alert("Logeado")

    } else {
      alert("usuario inválido")
    }
  }

}
