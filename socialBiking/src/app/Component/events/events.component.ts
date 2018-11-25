import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  public clicked : boolean = false ;
  
  @Input()
  addedItem:boolean ;
  
  @Output() addedItemChange = new EventEmitter<boolean>();

  constructor() { }

  onParticipate(){
    this.addedItemChange.emit(true);
  }

  ngOnInit() {
  }
  eventClicked1() {
    this.clicked=true ; }
    eventClicked2() {
      this.clicked=true ; }
      eventClicked3() {
        console.log("eventClicker 3")        
        this.clicked=true ; }
  



}
