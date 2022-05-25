import { Component, ViewChild, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ComponenLoadDirective } from './directivas/componen-load.directive';
import { Observable, Subscription } from 'rxjs';

import { Card1Component } from './cards/card1/card1.component';
import { Card2Component } from './cards/card2/card2.component';
import { UtilsService } from './services/utils.service';

import {
  Firestore,
  collection,
  addDoc,
  collectionData,
} from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild(ComponenLoadDirective) showComponent!: ComponenLoadDirective;
  data: object[] = [];
  getData?: Subscription;

  constructor(public utils: UtilsService, public fireStore: Firestore) {}

  ngOnInit(): void {
    this.data = this.utils.data;
    this.getData = this.utils.getData.subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }
  cards = [
    {
      id_card: 'card_1',
      structure: Card1Component,
    },
    {
      id_card: 'card_2',
      structure: Card2Component,
    },
  ];

  async savePage() {
    let coleccion = collection(this.fireStore, 'pages');
    return await addDoc(coleccion, { page: this.data });
  }

  getPages() {
    let coleccion = collection(this.fireStore, 'pages');
    let getPage = collectionData(coleccion, { idField: 'id' }) as Observable<
      any[]
    >;
    let page = getPage.subscribe((data) => {
      console.log(data);
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    let id = event.item.element.nativeElement.id;
    let getinfo = event.item.element.nativeElement.outerHTML;
    let getName_1 = getinfo.split('name');
    let name = getName_1[1].split('"');
    for (const element of this.cards) {
      if (element.id_card === id) {
        let viewComponent = this.showComponent.viewContainerRef;
        viewComponent.createComponent<any>(element.structure);
        this.utils.newIndex();
        this.data.push({});
      }
    }
  }
}
