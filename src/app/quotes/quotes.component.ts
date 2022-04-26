import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quote[]=[
    {id:1, name:'Dansam1', title:'Coding', details:'If the code runs, do not touch it!', author:'Dansam Developers'},
    {id:2, name:'Dansam2', title:'IDE', details:'A programmer must have a brain IDE and a computer IDE', author:'Dansam Developers'},
    {id:3, name:'Dansam3', title:'Solitary', details:'A programmer has no life, though I have one', author:'Dansam Developers'},
    {id:4, name:'Dansam4', title:'Debugging', details:'No debugging, no coding!', author:'Dansam Developers'},
    {id:5, name:'Dansam5', title:'Just Give Up', details:'If things do not work at all, shut down machine, leave and never turn back!', author:'Dansam Developers'},
    {id:6, name:'Dansam6', title:'Programmer Lovelive', details:'A male programmer needs a cool wife while a female programmer needs a co-wife!', author:'Dansam Developers'},


  ];
  constructor() { }

  ngOnInit(): void {
  }

}
