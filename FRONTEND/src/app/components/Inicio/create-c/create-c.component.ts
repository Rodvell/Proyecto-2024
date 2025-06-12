import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/httpAccess/service.service';

@Component({
  selector: 'app-create-c',
  templateUrl: './create-c.component.html',
  styleUrls: ['./create-c.component.css']
})
export class CreateCComponent {
  constructor(private backend: ServiceService, private router: Router, private activateRouter: ActivatedRoute) {} 

  correo: string = '';
  nombre: string = '';
  contrasena: string = '';
  telefono: string = '';

  pnombre:string = '';
  apellido:string = '';
  dpi:string = '';
  pcorreo:string = '';
  pass:string = '';

  selectedOption: string = '';

  crearUserE() {
    if ((this.nombre != '') && (this.correo != '') && (this.correo != '') && (this.contrasena != '') && (this.telefono != ''))
      this.backend.createPerfil_E(this.correo, this.nombre, this.contrasena, this.telefono).subscribe(res => {
        alert(res.output)
        this.router.navigate(["/menu"]);
      })
  }

  crearUserP() {
    if ((this.pnombre != '') && (this.apellido != '') && (this.dpi != '') && (this.pcorreo != '') && (this.pass != '')) {
      this.backend.createPerfil_P(this.pnombre, this.apellido, this.dpi, this.pcorreo, this.pass).subscribe(res => {
      alert(res.output);
      this.router.navigate(["/menu"]);
    })
    }
  }

  vercorr(cor:string): boolean {

    return true
  }
}
