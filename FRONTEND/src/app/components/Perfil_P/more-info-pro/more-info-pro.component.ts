import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/httpAccess/service.service';

@Component({
  selector: 'app-more-info-pro',
  templateUrl: './more-info-pro.component.html',
  styleUrls: ['./more-info-pro.component.css']
})
export class MoreInfoProComponent {
  constructor(private dialog: MatDialog, private backend: ServiceService, private router: Router, private activateRouter: ActivatedRoute) {} 

  correo:string = this.activateRouter.snapshot.params['cor'];
  enombre:string = this.activateRouter.snapshot.params['enom'];
  titulo:string = this.activateRouter.snapshot.params['tit'];
  desc: string = ''
  requisitos: string = ''

  ngOnInit(): void {
    this.backend.getPro_byTit(this.enombre, this.titulo).subscribe(res => {
      this.desc = res.recordset[0].descripcion
      this.requisitos = res.recordset[0].requisitos
    })
  }

  logout() {
    localStorage.clear()
    this.router.navigate(["/login"])
}
}
