import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  constructor() { }
  today = new Date();
  stuff: Array<Object> = [];
  pattern!: string;


  ngOnInit(): void {
  }

  addItem(item:string) {
    this.stuff.push({name: item});
  }
}
