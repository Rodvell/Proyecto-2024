import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileComponent } from 'src/app/Dialogs/profile/profile.component';
import { ServiceService } from 'src/app/services/httpAccess/service.service';

@Component({
  selector: 'app-menu-e',
  templateUrl: './menu-e.component.html',
  styleUrls: ['./menu-e.component.css']
})
export class MenuEComponent {
  constructor(public dialog: MatDialog, private backend: ServiceService, private router: Router, private activateRouter: ActivatedRoute) {} 

  enombre:string = this.activateRouter.snapshot.params['enom']

  prueba:string = 'Prueba';

  logout() {
    localStorage.clear()
    this.router.navigate(["/login"])
  }
}
