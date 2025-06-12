import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, startWith, map } from 'rxjs';
import { cursos } from 'src/app/models/Cursos/Cursos';
import { ServiceService } from 'src/app/services/httpAccess/service.service';

@Component({
  selector: 'app-menu-c',
  templateUrl: './menu-c.component.html',
  styleUrls: ['./menu-c.component.css']
})
export class MenuCComponent {
  constructor(private dialog: MatDialog, private backend: ServiceService, private router: Router, private activateRouter: ActivatedRoute) {} 

  correo:string = this.activateRouter.snapshot.params['pcor'];
  resultados: cursos[] = []

  ngOnInit(): void {
    this.backend.getAllCursos().subscribe(res => {
      this.resultados = res.recordset
    })
  }

  logout() {
    localStorage.clear()
    this.router.navigate(["/login"])
}
}
