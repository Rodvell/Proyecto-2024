import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { formularios } from 'src/app/models/Formularios/Formularios';
import { ServiceService } from 'src/app/services/httpAccess/service.service';

@Component({
  selector: 'app-menu-aplicar',
  templateUrl: './menu-aplicar.component.html',
  styleUrls: ['./menu-aplicar.component.css']
})
export class MenuAplicarComponent {
  constructor(private dialog: MatDialog, private backend: ServiceService, private router: Router, private activateRouter: ActivatedRoute) {} 

  correo:string = this.activateRouter.snapshot.params['cor'];
  enombre:string = this.activateRouter.snapshot.params['enom'];
  titulo:string = this.activateRouter.snapshot.params['tit'];
  preguntas: formularios[] = []
  id:number = 0
  log:number = 0
  cantP:number = 0
  desc:string = ''
  selectedOption:string = ''
  aplico: boolean = true
  respondio: boolean = true
  respuesta:string = ''

  ngOnInit(): void {
    this.backend.getAplica_byPcor(this.enombre, this.titulo, this.correo).subscribe(res => {
      if (res.recordset.length > 0) {
        this.aplico = false
      }
    })

    this.backend.getPregForm(this.enombre, this.titulo).subscribe(res=> {
      this.preguntas = res.recordset
      this.log = res.recordset.length
      console.log(res.recordset)
    })

    this.backend.respondio(this.enombre, this.titulo, this.correo).subscribe(res => {
      if (res.rowsAffected[0] > 0) {
        this.respondio = false
      }
    })
  }

  guardar() {
    this.backend.aplicar(this.enombre, this.titulo, this.correo, 'Pendiente', this.desc, 'Nada').subscribe(res => {
      
      location.reload()
    })
  }

  guardarP(idp:number, preg:string) {
    this.backend.guardarResp(this.enombre, this.titulo, idp, this.correo, this.respuesta).subscribe(res => {
      
      this.id = this.id + 1
      this.respuesta = ''
    })
  }

  logout() {
    localStorage.clear()
    this.router.navigate(["/login"])
  }
}
