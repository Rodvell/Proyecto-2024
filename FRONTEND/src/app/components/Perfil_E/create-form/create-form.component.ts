import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { propuestas } from 'src/app/models/Propuestas/Propuestas';
import { ServiceService } from 'src/app/services/httpAccess/service.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent {
  constructor(private dialog: MatDialog, private backend: ServiceService, private router: Router, private activateRouter: ActivatedRoute) {} 

  enombre:string = this.activateRouter.snapshot.params['enom'];
  resultados: propuestas[] = []
  cont = 0
  titulo:string=''
  pregunta:string  = '';
  id:number = 1;

  ngOnInit(): void {
    this.backend.listPro_by(this.enombre).subscribe(res => {
      this.resultados = res.recordset
    })
  }

  sig() {
    this.cont = this.cont + 1;
    this.backend.getForm_by(this.enombre, this.titulo).subscribe(res => {
      if(res.rowsAffected[0] > 0) {
        for(let i = 0; i < res.recordset.length; i++) {
          if(i == res.recordset.length - 1) {
            let respuesta = res.recordset[i];
            this.id = respuesta.idF + 1;
          }
        }
      }
    })
  }

  otra() {
    this.backend.createForm(this.enombre, this.titulo, this.id, this.pregunta).subscribe( res => {
      if (res.rowsAffected[0] == 1) {
      }
    })
    this.id = this.id + 1;
    this.pregunta = "";

  }

  guardar() {
    this.backend.createForm(this.enombre, this.titulo, this.id, this.pregunta).subscribe( res => {
      if (res.rowsAffected[0] == 1) {
        this.router.navigate(["/menuE/" + this.enombre]);
      }
    })
  }

  logout() {
    localStorage.clear()
    this.router.navigate(["/login"])
  }
}
