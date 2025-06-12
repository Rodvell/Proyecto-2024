import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/httpAccess/service.service';

@Component({
  selector: 'app-info-apli',
  templateUrl: './info-apli.component.html',
  styleUrls: ['./info-apli.component.css']
})
export class InfoApliComponent {
  constructor(private dialog: MatDialog, private backend: ServiceService, private router: Router, private activateRouter: ActivatedRoute) {} 

  enombre:string = this.activateRouter.snapshot.params['enom'];
  titulo:string = this.activateRouter.snapshot.params['tit'];
  correo:string = this.activateRouter.snapshot.params['pcor'];

  nombre: string = ''
  apellido: string = ''
  cursos: string = ''


  ngOnInit(): void {
    this.backend.getMiPerfilP(this.correo).subscribe(res => {
      this.nombre = res.recordset[0].Pnombre
      this.apellido = res.recordset[0].apellido
    })

    this.backend.getAsigna_byCnom(this.correo).subscribe(res => {
      for(let i = 0; i < res.recordset.length; i++) {
        if (i == 0) {
          this.cursos = this.cursos + res.recordset[i].Cnombre + " Estado: "  + res.recordset[i].estado+"\r"
        } else {
          this.cursos = this.cursos + ", " + res.recordset[i].Cnombre + " Estado: "  + res.recordset[i].estado
        }
      }
      console.log(res.recordset)
    })
  }

  logout() {
    localStorage.clear()
    this.router.navigate(["/login"])
  }
}
