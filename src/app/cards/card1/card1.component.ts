import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css'],
})
export class Card1Component implements OnInit {
  statusCard: boolean = false;

  data = {
    id: 'Random_ID',
    type: 'card',
    modelo: 'card1',
    dataElement: {
      title: '',
      description: '',
      url_img: '',
    },
  };

  constructor(public utils: UtilsService) {}
  ngOnInit(): void {}

  saveData() {
    this.statusCard = true;
    this.utils.newData(this.data);
  }
  editCard() {
    this.statusCard = false;
  }
}
