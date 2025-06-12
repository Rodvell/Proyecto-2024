import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertasComponent } from 'src/app/Dialogs/alertas/alertas.component';
import { ServiceService } from 'src/app/services/httpAccess/service.service';

@Component({
  selector: 'app-create-pro',
  templateUrl: './create-pro.component.html',
  styleUrls: ['./create-pro.component.css']
})
export class CreateProComponent {
  constructor(private dialog: MatDialog, private backend: ServiceService, private router: Router, private activateRouter: ActivatedRoute) {} 

  enombre:string = this.activateRouter.snapshot.params['enom'];

  titulo:string = '';
  desc:string = '';
  requi:string = '';

  guardar() {
    this.backend.createPro(this.enombre, this.titulo, this.desc, this.requi).subscribe(res => {
      if (res.rowsAffected[0] > 0) {
        this.backend.mensajeSubject.next(res.output)
        this.dialog.open(AlertasComponent, {
          width: '30%',
          height: '30%'
        });
        this.router.navigate(["/menuE/"+this.enombre]);
      }
    })
  }

  logout() {
    localStorage.clear()
    this.router.navigate(["/login"])
  }

}
