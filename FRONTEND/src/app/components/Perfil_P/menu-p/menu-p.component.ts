import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/httpAccess/service.service';

@Component({
  selector: 'app-menu-p',
  templateUrl: './menu-p.component.html',
  styleUrls: ['./menu-p.component.css']
})
export class MenuPComponent {
  constructor(public dialog: MatDialog, private backend: ServiceService, private router: Router, private activateRouter: ActivatedRoute) {} 

  correo:string = this.activateRouter.snapshot.params['cor']

  showFiller = false;

  prueba() {
    alert('Hola')
  }

  logout() {
    localStorage.clear()
    this.router.navigate(["/login"])
  }
}
