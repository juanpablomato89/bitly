import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-report2',
  templateUrl: './report2.component.html',
  styleUrls: ['./report2.component.css']
})
export class Report2Component implements OnInit {

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.filter$.pipe(
      map((res: any) => ({
        name: res?.name || null,
        new_age: res?.age * 5 || null,
        age: res?.age || null,

      }))
    ).subscribe(res => {
      console.log('Filtros para el segundo reporte', res);
    }, err => console.error('Error en el segundo reporte', err));
  }

}
