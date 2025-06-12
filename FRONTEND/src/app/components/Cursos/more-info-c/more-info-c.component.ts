import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { cursos } from 'src/app/models/Cursos/Cursos';
import { ServiceService } from 'src/app/services/httpAccess/service.service';

@Component({
  selector: 'app-more-info-c',
  templateUrl: './more-info-c.component.html',
  styleUrls: ['./more-info-c.component.css']
})
export class MoreInfoCComponent {
  constructor(private dialog: MatDialog, private backend: ServiceService, private router: Router, private activateRouter: ActivatedRoute) {} 

  correo:string = this.activateRouter.snapshot.params['pcor'];
  cnombre:string = this.activateRouter.snapshot.params['cnom'];
  resultados: cursos[]= []
  resultados2: any[] = []
  cont: number = 0 
  comp: boolean = true

  ngOnInit(): void {
    this.backend.getCurso_by(this.cnombre).subscribe(res => {
      this.resultados = res.recordset
    })

    this.backend.getAsigna_by(this.correo, this.cnombre).subscribe(res => {
      if (res.rowsAffected[0] > 0) {
        this.comp = false
      }
    })

    this.backend.getClases(this.cnombre).subscribe(res => {
      this.resultados2 = res.recordset
      console.log(this.resultados2)
    })
    
  }

  asignarme() {
    this.backend.asignarme(this.cnombre, this.correo, 'Cursandose').subscribe(res => {
      alert(res.output)
    })
    for(let i = 0; i < this.resultados2.length; i++) {
      this.backend.asigClass(this.cnombre, this.resultados2[i].Cid, this.correo, "Cursandose").subscribe(res=> {
        alert("Funciono")
      })
    }
    location.reload()
  }

  logout() {
    localStorage.clear()
    this.router.navigate(["/login"])
  }
}
