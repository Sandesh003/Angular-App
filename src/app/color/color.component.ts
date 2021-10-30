import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector: 'app-color',
    templateUrl: './color.component.html',
    styles: [`
    .online{
        color:white;
    }
    `]
})
export class colorComponent{
    serverId = 10;
    serverStatus: string = "offline";
    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }
    getServerStatus(){
        return this.serverStatus;
    }

    getcolor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }


}