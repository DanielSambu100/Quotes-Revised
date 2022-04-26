import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() footer='Copyright (c) 2022, Dansam Sons Ltd. All Rights Reserved!';
  constructor() { }

  ngOnInit(): void {
  }

}
