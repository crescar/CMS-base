import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css'],
})
export class Card1Component implements OnInit {
  statusCard: boolean = false;
  indexComponents: number = 0;
  getIndex?: Subscription;

  data = {
    index: 0,
    type: 'card',
    modelo: 'card1',
    dataElement: {
      title: '',
      description: '',
      url_img: '',
    },
  };

  constructor(public utils: UtilsService) {}
  ngOnInit(): void {
    this.indexComponents = this.utils.indexComponents;
    this.getIndex = this.utils.setIndexComponents.subscribe((data) => {
      if (this.indexComponents === 0) {
        this.indexComponents = data;
      }
    });
  }

  saveData() {
    this.statusCard = true;
    this.data.index = this.indexComponents - 1;
    this.utils.newData(this.data);
  }
  editCard() {
    this.statusCard = false;
  }
  removeCard() {
    console.log(this.indexComponents);
  }
}
