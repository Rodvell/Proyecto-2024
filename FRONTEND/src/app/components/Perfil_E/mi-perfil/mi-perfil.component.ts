import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/httpAccess/service.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent {
  constructor(private backend: ServiceService, private router: Router, private activateRouter: ActivatedRoute) {} 

  enombre:string = this.activateRouter.snapshot.params['enom'];
  correo: string = '';
  telefono: string = '';

  ngOnInit(): void {
    this.backend.getMiPerfil_E(this.enombre).subscribe(res => {
      this.correo = res.recordset[0].Ecorreo;
      this.telefono = res.recordset[0].telefono;
    })
  }

  logout() {
    localStorage.clear()
    this.router.navigate(["/login"])
  }
}
