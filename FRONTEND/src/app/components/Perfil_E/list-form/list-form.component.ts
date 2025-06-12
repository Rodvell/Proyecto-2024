import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { formularios } from 'src/app/models/Formularios/Formularios';
import { propuestas } from 'src/app/models/Propuestas/Propuestas';
import { ServiceService } from 'src/app/services/httpAccess/service.service';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.css']
})
export class ListFormComponent {
  constructor(private dialog: MatDialog, private backend: ServiceService, private router: Router, private activateRouter: ActivatedRoute) {} 

  enombre:string = this.activateRouter.snapshot.params['enom'];
  resultados: propuestas[] = []
  resultados2: formularios[] = []
  cont = 0
  titulo:string=''

  ngOnInit(): void {
    this.backend.listPro_by(this.enombre).subscribe(res => {
      this.resultados = res.recordset
    })
  }

  sig() {
    this.cont = this.cont + 1;
    this.backend.getForm_by(this.enombre, this.titulo).subscribe(res => {
      this.resultados2 = res.recordset
    })
  }

  eliminar(id:number) {
    this.backend.deleteForm(this.enombre, this.titulo, id).subscribe(res => {
      if (res.rowsAffected[0] > 0) {
        alert(res.output)
        location.reload()
      } else {
        alert('No se pudo eliminar')
      }
    })
  }

  logout() {
    localStorage.clear()
    this.router.navigate(["/login"])
  }
}
