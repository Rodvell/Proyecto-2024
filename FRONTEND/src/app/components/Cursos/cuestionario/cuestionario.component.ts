import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { cuestionario } from 'src/app/models/Cuestionario/Cuestionario';
import { respondeC } from 'src/app/models/RespondeC/RespondeC';
import { ServiceService } from 'src/app/services/httpAccess/service.service';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css']
})
export class CuestionarioComponent {
  constructor(private dialog: MatDialog, private backend: ServiceService, private router: Router, private activateRouter: ActivatedRoute) {} 

  correo:string = this.activateRouter.snapshot.params['pcor'];
  nombre:string = this.activateRouter.snapshot.params['cnom'];
  cid:number = this.activateRouter.snapshot.params['cid'];
  resultados: cuestionario[] = []
  resultados2: respondeC[] = []
  resp:string = ''
  confirm: boolean = true
  id = 0
  long = 0
  view:boolean = true

  ngOnInit(): void {
    this.backend.getCuestionario(this.nombre, this.cid).subscribe(res => {
      this.resultados = res.recordset
      this.long = res.recordset.length
      console.log(res.recordset)
    })
    
    this.backend.getConfirm(this.nombre, this.cid, this.correo).subscribe(res => {
      console.log(res.rowsAffected[0])
      if (res.rowsAffected[0] > 0) {
        this.confirm = false
        this.resultados2 = res.recordset
      }
    })
  }

  sig(resC:string, num:number) {
    let est = ''
    this.id = this.id + 1
    if (resC === this.resp) {
      est = 'Correcta'
    } else {
      est = 'Incorrecta'
    }
    this.backend.guardarResC(this.nombre, this.cid, num, this.correo, resC, est).subscribe(res => {
    })
    if (this.id == this.long) {
      location.reload()
    }
    this.resp = ''
  }

  viewRes() {
    this.view = false;
  }

  reg() {
    this.view = true
  }

  reiniciar() {
    this.backend.volver(this.nombre, this.cid, this.correo).subscribe(res => {
      alert(res.output)
      location.reload()
    })
  }

  logout() {
    localStorage.clear()
    this.router.navigate(["/login"])
  }
}
