import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-dude',
  templateUrl: './new-dude.component.html',
  styleUrls: ['./new-dude.component.css']
})
export class NewDudeComponent implements OnInit {

	componentTitle: String = "So macht man einen neuen Dude";
  
  constructor() { }

  ngOnInit() {
  }

}
