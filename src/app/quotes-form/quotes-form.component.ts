import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {

  @Input() formtitle='Add New Quote';
  constructor() { }

  ngOnInit(): void {
  }

}
