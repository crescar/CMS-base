import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-card-show1',
  templateUrl: './card-show1.component.html',
  styleUrls: ['./card-show1.component.css'],
})
export class CardShow1Component implements OnInit {
  @Input() data: any;
  constructor() {}
  ngOnInit(): void {}
}
