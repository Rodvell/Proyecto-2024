import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../services/httpAccess/service.service';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent {
  mensaje: string = ""

  constructor(private backend: ServiceService, private router: Router, private activateRouter: ActivatedRoute) {}

  ngOnInit(): void{
    this.backend.mensaje$.subscribe(mes => {
      this.mensaje = mes;
    });
  }

}
