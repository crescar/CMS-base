import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}
  data: object[] = [];
  getData = new Subject<any>();

  indexComponents = 0;
  setIndexComponents = new Subject<any>();

  loadIndex = 0;
  setLoadIndex = new Subject<any>();

  newData(datos: any) {
    this.data[datos.index] = datos;
    this.getData.next(this.data);
  }

  newIndex() {
    this.setIndexComponents.next(this.indexComponents);
    this.indexComponents += 1;
  }

  newLoadIndex() {
    this.setLoadIndex.next(this.loadIndex);
    this.loadIndex += 1;
  }
}
