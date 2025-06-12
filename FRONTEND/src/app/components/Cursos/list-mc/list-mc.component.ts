import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { asigna } from 'src/app/models/Asigna/Asigna';
import { ServiceService } from 'src/app/services/httpAccess/service.service';

@Component({
  selector: 'app-list-mc',
  templateUrl: './list-mc.component.html',
  styleUrls: ['./list-mc.component.css']
})
export class ListMCComponent {
  constructor(private dialog: MatDialog, private backend: ServiceService, private router: Router, private activateRouter: ActivatedRoute) {} 

  correo:string = this.activateRouter.snapshot.params['pcor'];
  resultados: asigna[] = []

  ngOnInit(): void {
    this.backend.getAsigna_byCnom(this.correo).subscribe(res => {
      this.resultados = res.recordset
    })
  }

  logout() {
    localStorage.clear()
    this.router.navigate(["/login"])
  }
} 
