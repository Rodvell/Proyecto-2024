import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { aplica } from 'src/app/models/Aplica/Aplica';
import { ServiceService } from 'src/app/services/httpAccess/service.service';

@Component({
  selector: 'app-list-pro-a',
  templateUrl: './list-pro-a.component.html',
  styleUrls: ['./list-pro-a.component.css']
})
export class ListProAComponent {
  constructor(public dialog: MatDialog, private backend: ServiceService, private router: Router, private activateRouter: ActivatedRoute) {} 

  correo:string = this.activateRouter.snapshot.params['cor']
  resultados: aplica[] = []

  ngOnInit(): void {
    this.backend.Myaplicate(this.correo).subscribe(res => {
      this.resultados = res.recordset
    })
  }

  logout() {
    localStorage.clear()
    this.router.navigate(["/login"])
}

}
