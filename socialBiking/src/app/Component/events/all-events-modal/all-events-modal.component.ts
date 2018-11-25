import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-all-events-modal',
  templateUrl: './all-events-modal.component.html',
  styleUrls: ['./all-events-modal.component.css']
})
export class AllEventsModalComponent implements OnInit {

  @Input()
  addedItem:boolean
  constructor() { }

  ngOnInit() {
  }

}
