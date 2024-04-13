import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { StateService } from './state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'bitly';
  apiform: FormGroup;

  constructor(private service: ApiService,
    private apiFormBuilder: FormBuilder,
    private stateService: StateService
  ) {
    this.apiform = this.apiFormBuilder.group({
      name: new FormControl(''),
      age: new FormControl(''),
    });

  }

  ngOnInit() {
    //Trabajo con http client y RXJS
    this.getDataExampleForHTTP();

    //Trabajo con RXJS y Formularios
    this.getNameChangeValue();
  }

  getDataExampleForHTTP() {
    this.service.getDataCompleteObject().subscribe(data => console.log(data));

    this.service.getData().subscribe(data => console.log(data));

    this.service.getAllData().subscribe(data => console.log(data));
  }

  getNameChangeValue() {
    this.apiform.get('name')?.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((res: any) => {
        console.log(res)
      });
  }

  filtrar() {
    this.stateService.filterSource.next(this.apiform.value);
  }

}
