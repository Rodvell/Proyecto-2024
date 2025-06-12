import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { respondef } from 'src/app/models/RespondeF/RespondeF';
import { ServiceService } from 'src/app/services/httpAccess/service.service';

@Component({
  selector: 'app-view-res',
  templateUrl: './view-res.component.html',
  styleUrls: ['./view-res.component.css']
})
export class ViewResComponent {
  constructor(private dialog: MatDialog, private backend: ServiceService, private router: Router, private activateRouter: ActivatedRoute) {} 

  enombre:string = this.activateRouter.snapshot.params['enom'];
  titulo:string = this.activateRouter.snapshot.params['tit'];
  idF:number = this.activateRouter.snapshot.params['id'];
  resultados: respondef[] = []
  comp = 0

  ngOnInit(): void {
    this.backend.getResF(this.enombre, this.titulo, this.idF).subscribe(res => {
      this.resultados=res.recordset
      if (res.recordset.length > 0) {
        this.comp = 2
      } else {
        this.comp = 1
      }
    })
  }

  logout() {
    localStorage.clear()
    this.router.navigate(["/login"])
}
}
