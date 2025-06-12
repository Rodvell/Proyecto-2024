import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { perfil_p } from 'src/app/models/Perfil_P/Perfil_P';
import { ServiceService } from 'src/app/services/httpAccess/service.service';

@Component({
  selector: 'app-miperfil-p',
  templateUrl: './miperfil-p.component.html',
  styleUrls: ['./miperfil-p.component.css']
})
export class MiperfilPComponent {
  constructor(public dialog: MatDialog, private backend: ServiceService, private router: Router, private activateRouter: ActivatedRoute) {} 

  correo:string = this.activateRouter.snapshot.params['cor']

  nombre:string = ''
  apellido:string = ''
  dpi:string = ''

  ngOnInit(): void {
    this.backend.getMiPerfilP(this.correo).subscribe(res => {
      this.nombre= res.recordset[0].Pnombre
      this.apellido = res.recordset[0].apellido
      this.dpi = res.recordset[0].dpi
    })
  }

  logout() {
    localStorage.clear()
    this.router.navigate(["/login"])
}
}
