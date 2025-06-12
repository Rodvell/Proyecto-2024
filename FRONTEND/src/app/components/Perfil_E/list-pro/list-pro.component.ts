import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { propuestas } from 'src/app/models/Propuestas/Propuestas';
import { ServiceService } from 'src/app/services/httpAccess/service.service';

@Component({
  selector: 'app-list-pro',
  templateUrl: './list-pro.component.html',
  styleUrls: ['./list-pro.component.css']
})
export class ListProComponent {
  constructor(private dialog: MatDialog, private backend: ServiceService, private router: Router, private activateRouter: ActivatedRoute) {} 

  enombre:string = this.activateRouter.snapshot.params['enom'];
  resultados: propuestas[] = []

  ngOnInit(): void {
    this.backend.listPro_by(this.enombre).subscribe(res => {
      this.resultados = res.recordset
    })
  }

  eliminarPro(tit:string) {
    this.backend.deletePro(this.enombre, tit).subscribe(res => {
      if (res.rowsAffected[0] > 0) {
        alert(res.output);
        location.reload()
      } else {
        alert('No se logro eliminar')
      }
    })
  }

  logout() {
    localStorage.clear()
    this.router.navigate(["/login"])
  }

}
