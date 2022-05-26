import { Component, ViewChild, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ComponenLoadDirective } from 'src/app/directivas/componen-load.directive';
import { Subscription } from 'rxjs';
import { Card1Component } from 'src/app/cards/card1/card1.component';
import { Card2Component } from 'src/app/cards/card2/card2.component';
import { UtilsService } from 'src/app/services/utils.service';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

import { Router } from '@angular/router';

@Component({
  selector: 'app-create-pages',
  templateUrl: './create-pages.component.html',
  styleUrls: ['./create-pages.component.css'],
})
export class CreatePagesComponent implements OnInit {
  @ViewChild(ComponenLoadDirective) showComponent!: ComponenLoadDirective;
  data: object[] = [];
  getData?: Subscription;
  dataPage: object[] = [];

  constructor(
    public utils: UtilsService,
    public fireStore: Firestore,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.data = this.utils.data;
    this.getData = this.utils.getData.subscribe((data) => {
      this.data = data;
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
    await addDoc(coleccion, { page: this.data });
    this.router.navigate(['loadPage']);
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
