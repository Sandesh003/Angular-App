import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {

  constructor() { }
  showSecret = false;
  log: any = [];
  logDisplay(){
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }

  ngOnInit(): void {
  }

}
