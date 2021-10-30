import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowServer: string = "";
  serverName = "";
  created = false;
 
  
  constructor() { 

}

onUpdateServer(event : any){
  this.serverName = event.target.value;
  
}

myfun(){
  this.created = true;
  return this.allowServer = "helllo there... your server name is " + this.serverName;

}

  ngOnInit(): void {
  }
 
}
