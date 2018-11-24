import { Component, OnInit ,Input } from '@angular/core';
import {FormControl} from '@angular/forms' ;
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() _comments;
  constructor() { }

  ngOnInit() {
  }

}
