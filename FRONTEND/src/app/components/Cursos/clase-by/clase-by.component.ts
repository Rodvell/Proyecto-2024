import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { informacion } from 'src/app/models/Informacion/Informacion';
import { ServiceService } from 'src/app/services/httpAccess/service.service';

@Component({
  selector: 'app-clase-by',
  templateUrl: './clase-by.component.html',
  styleUrls: ['./clase-by.component.css']
})
export class ClaseByComponent {
  constructor(private dialog: MatDialog, private backend: ServiceService, private router: Router, private activateRouter: ActivatedRoute) {} 

  correo:string = this.activateRouter.snapshot.params['pcor'];
  nombre:string = this.activateRouter.snapshot.params['cnom'];
  cid:number = this.activateRouter.snapshot.params['cid'];

  resultados: informacion[] = []

  ngOnInit(): void {
    this.backend.getInfoClass(this.nombre, this.cid).subscribe(res => {
      this.resultados = res.recordset
    })
  }

  logout() {
    localStorage.clear()
    this.router.navigate(["/login"])
  }
}
