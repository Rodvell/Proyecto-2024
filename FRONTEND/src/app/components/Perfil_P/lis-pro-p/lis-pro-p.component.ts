import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { propuestas } from 'src/app/models/Propuestas/Propuestas';
import { ServiceService } from 'src/app/services/httpAccess/service.service';

@Component({
  selector: 'app-lis-pro-p',
  templateUrl: './lis-pro-p.component.html',
  styleUrls: ['./lis-pro-p.component.css']
})
export class LisProPComponent {
  constructor(private dialog: MatDialog, private backend: ServiceService, private router: Router, private activateRouter: ActivatedRoute) {} 

  correo:string = this.activateRouter.snapshot.params['cor'];
  resultados: propuestas[] = []


  ngOnInit(): void {
    this.backend.getAllPro().subscribe(res => {
      this.resultados = res.recordset
    })
  }

  logout() {
    localStorage.clear()
    this.router.navigate(["/login"])
  }
}
