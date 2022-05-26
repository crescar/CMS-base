import { Component, OnInit, ViewChild } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ComponenLoadDirective } from 'src/app/directivas/componen-load.directive';
import { CardShow1Component } from 'src/app/cards/card-show1/card-show1.component';

@Component({
  selector: 'app-load-pages',
  templateUrl: './load-pages.component.html',
  styleUrls: ['./load-pages.component.css'],
})
export class LoadPagesComponent implements OnInit {
  @ViewChild(ComponenLoadDirective) showComponent!: ComponenLoadDirective;
  dataPage: object[] = [];

  cards2 = [
    {
      id_card: 'card1',
      structure: CardShow1Component,
    },
  ];

  constructor(public fireStore: Firestore) {}

  ngOnInit(): void {
    this.getPages();
  }

  getPages() {
    let coleccion = collection(this.fireStore, 'pages');
    let getPage = collectionData(coleccion, { idField: 'id' }) as Observable<
      any[]
    >;
    getPage.subscribe((data) => {
      this.loadPage(data);
    });
  }

  loadPage(page: any) {
    let data: any = page[0];
    for (const componet of data.page) {
      for (const element of this.cards2) {
        if (element.id_card === componet.modelo) {
          let viewComponent = this.showComponent.viewContainerRef;
          let createComponent = viewComponent.createComponent<any>(
            element.structure
          );
          createComponent.instance.data = componet.dataElement;
        }
      }
    }
  }
}
