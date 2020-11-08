import { Component, OnInit,Input } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  quote: Quote[] = [
    new Quote(1, 'Change the world by being yourself.', 'Amy Poehler', 'Thierry', new Date(2020,2,7), 1, 0),
    new Quote(2, 'Every moment is a fresh beginning.', 'T.S Eliot ', 'Thierry M', new Date(2018, 10, 3), 1, 0),
    new Quote(3, 'Never regret anything that made you smile. ”', 'Mark Twain ', 'Mugisha', new Date(2020, 9, 1), 1, 0),
   
  ];


  showQuotedetails(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }

  completeGoal(isComplete, index){
    if (isComplete) {
      let removeQuote = confirm(`Are you sure you want to renove this" ${this.quote[index].quote}?" from your quotes`);
    
      if(removeQuote)
      this.quote.splice(index,1);
    }
  }
  addNewQuote(quote) {
    let quoteLength = this.quote.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quote.push(quote);
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
