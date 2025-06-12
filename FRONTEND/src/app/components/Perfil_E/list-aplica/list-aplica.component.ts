import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { aplica } from 'src/app/models/Aplica/Aplica';
import { ServiceService } from 'src/app/services/httpAccess/service.service';

@Component({
  selector: 'app-list-aplica',
  templateUrl: './list-aplica.component.html',
  styleUrls: ['./list-aplica.component.css']
})
export class ListAplicaComponent {
  constructor(private dialog: MatDialog, private backend: ServiceService, private router: Router, private activateRouter: ActivatedRoute) {} 

  enombre:string = this.activateRouter.snapshot.params['enom'];
  titulo:string = this.activateRouter.snapshot.params['tit'];
  comp:number = 0
  resultados: aplica[] = []

  ngOnInit(): void {
    this.backend.getAplica_byTit(this.enombre, this.titulo).subscribe(res => {
      if (res.recordset.length > 0) {
        this.comp=2
        this.resultados = res.recordset
      } else {
        this.comp=1
      }
    })
  }

  aprobar(pcorreo:string) {
    this.backend.updateAplica(this.enombre, this.titulo, pcorreo, 'Aprobado').subscribe(res => {
      if (res.rowsAffected[0] > 0) {
        alert(res.output)
        location.reload()
      } else {
        alert('No se pudo aprobar')
      }
    })
  }

  rechazado(pcorreo:string) {
    this.backend.updateAplica(this.enombre, this.titulo, pcorreo, 'Rechazado').subscribe(res => {
      if (res.rowsAffected[0] > 0) {
        alert(res.output)
        location.reload()
      } else {
        alert('No se pudo aprobar')
      }
    })
  }

  logout() {
    localStorage.clear()
    this.router.navigate(["/login"])
  }
}
