import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';
  serverID: number = 10;
  serverStatus: string = 'offline';
  serverGeneral(){
    return this.serverStatus;
  }
}
