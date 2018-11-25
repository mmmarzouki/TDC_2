import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
public loaded:boolean=false;
public done:boolean=false;

constructor(private change:ChangeDetectorRef) { }

  @Input()
  path:boolean;

  ngOnInit() {

  }
  eventClicked(){
    this.loaded=true;
    this.change.markForCheck();
    if(this.done!=true){
    document.getElementById("test").remove();
  this.done=true;  
  }
  }
}
