import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertasComponent } from 'src/app/Dialogs/alertas/alertas.component';
import { ServiceService } from 'src/app/services/httpAccess/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private dialog: MatDialog,private backend: ServiceService, private router: Router, private activateRouter: ActivatedRoute) {} 

  selectedOption: string = '';

  correo: string = '';
  contrasena: string = '';

  pcorreo:string = ''
  pass:string = ''

  submitLogin() {
    if ((this.correo != '') && (this.contrasena != '')) {
      this.backend.compPerfil_E(this.correo, this.contrasena).subscribe(res => {
        if(res.afect > 0) {
          if(res.succes == "Correcto") {
            this.backend.mensajeSubject.next("Iniciaste sesión")
            this.dialog.open(AlertasComponent, {
              width: '25%',
              height: '25%'
            });
            localStorage.setItem("Tokens", res.token);
            this.router.navigate(["/menuE/"+res.values]);
          }
        } else {
          this.backend.mensajeSubject.next("Usuario o Constraseña Incorrectos")
            this.dialog.open(AlertasComponent, {
              width: '25%',
              height: '25%'
            });
        }
      })
    }else {
      this.backend.mensajeSubject.next("Colocar valores para ingresar")
        this.dialog.open(AlertasComponent, {
          width: '25%',
          height: '25%'
        });
    }
  }

  compP() {
    if ((this.pcorreo != '') && (this.pass != '')) {
      this.backend.compPerfil_P(this.pcorreo, this.pass).subscribe(res => {
        if(res.values > 0) {
          if(res.succes == "Correcto") {
            this.backend.mensajeSubject.next("Iniciaste sesión")
            this.dialog.open(AlertasComponent, {
              width: '25%',
              height: '25%'
            });
            localStorage.setItem("Token", res.token);
            this.router.navigate(["/menuP/"+this.pcorreo]);
          }
        } else {
          this.backend.mensajeSubject.next("Usuario o Constraseña Incorrectos")
            this.dialog.open(AlertasComponent, {
              width: '25%',
              height: '25%'
            });
        }
      })
    }else {
      this.backend.mensajeSubject.next("Colocar valores para ingresar")
        this.dialog.open(AlertasComponent, {
          width: '25%',
          height: '25%'
        });
    }
  }
}
