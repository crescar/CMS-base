import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}
  data: object[] = [];
  getData = new Subject<any>();

  newData(datos: object) {
    this.data.push(datos);
    this.getData.next(this.data);
  }
}
