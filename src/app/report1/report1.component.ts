import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-report1',
  templateUrl: './report1.component.html',
  styleUrls: ['./report1.component.css']
})
export class Report1Component implements OnInit {

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.filter$.subscribe(res => {
      console.log('Filtros para el primer reporte', res);
    }, err => console.error('Error en el primer reporte', err));
  }

}
