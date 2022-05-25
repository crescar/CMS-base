import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UtilsService } from 'src/app/services/utils.service';
@Component({
  selector: 'app-card-show1',
  templateUrl: './card-show1.component.html',
  styleUrls: ['./card-show1.component.css'],
})
export class CardShow1Component implements OnInit {
  constructor(public utils: UtilsService) {}

  loadIndex = 0;
  getLoadIndex?: Subscription;
  dataElement = {
    title: '',
    description: '',
    url_img: '',
  };

  ngOnInit(): void {
    this.loadIndex = this.utils.loadIndex;
    this.getLoadIndex = this.utils.setLoadIndex.subscribe((data) => {
      if (this.loadIndex === 0) {
        this.loadIndex = data - 1;
      }
    });
  }
}
