import { Component, OnInit,Output, EventEmitter  } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  newQuote = new Quote (0,"","","",new Date(),1,0);
  @Output() addQuote = new EventEmitter<Quote>();

  quoteSubmit(){
this.addQuote.emit(this.newQuote);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
