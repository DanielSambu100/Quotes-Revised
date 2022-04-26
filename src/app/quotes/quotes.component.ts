import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quote[]=[
    new Quote(1, 'Dansam1', 'Coding', 'If the code runs, do not touch it!', 'Dansam Developers'),
    new Quote(2, 'Dansam2', 'IDE', 'A programmer must have a brain IDE and a computer IDE', 'Dansam Developers'),
    new Quote(3, 'Dansam3', 'Solitary', 'A programmer has no life, though I have one', 'Dansam Developers'),
    new Quote(4, 'Dansam4', 'Debugging', 'No debugging, no coding!', 'Dansam Developers'),
    new Quote(5, 'Dansam5', 'Just Give Up', 'If things do not work at all, shut down machine, leave and never turn back!', 'Dansam Developers'),
    new Quote(6, 'Dansam6', 'Programmer Lovelive', 'A male programmer needs a cool wife while a female programmer needs a co-wife!', 'Dansam Developers'),

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
