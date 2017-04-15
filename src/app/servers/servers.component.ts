import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer=false;
serverName="bvbcvb";
serverCreateStatus="No Server was created";
  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    },10000)
   }

  ngOnInit() {
  }
  onCreateServer()
  {
  this.serverCreateStatus="server was created";
  }
onUpdateServerName(event: Event)
{
this.serverName=(<HTMLInputElement>event.target).value;

}
}
