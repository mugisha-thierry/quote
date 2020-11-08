import { Component, OnInit,Input,Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();


  goalComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  like() {

    this.quote.like = this.quote.like + 1;

  }
  dislike() {

    this.quote.dislike = this.quote.dislike + 1;
  }
  ngOnInit(): void {
  }

}
