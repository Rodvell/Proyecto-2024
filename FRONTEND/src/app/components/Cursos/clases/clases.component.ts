import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { clases } from 'src/app/models/Clases/Clases';
import { ServiceService } from 'src/app/services/httpAccess/service.service';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent {
  constructor(private dialog: MatDialog, private backend: ServiceService, private router: Router, private activateRouter: ActivatedRoute) {} 

  correo:string = this.activateRouter.snapshot.params['pcor'];
  nombre:string = this.activateRouter.snapshot.params['cnom'];

  resultados: clases[] = []

  ngOnInit(): void {
    this.backend.getClass(this.nombre, this.correo).subscribe(res => {
      console.log(res)
      this.resultados = res.recordset
    })
  }

  logout() {
    localStorage.clear()
    this.router.navigate(["/login"])
  }
}
