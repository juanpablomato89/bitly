import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  filterSource = new BehaviorSubject(null);
  filter$ = this.filterSource.asObservable();

  constructor() { }
}
