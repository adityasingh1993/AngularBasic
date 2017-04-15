import { Component } from '@angular/core'

@Component({
selector:'app-message',
templateUrl:'./message.component.html',
styleUrls:['./message.component.css']
})

export class MessageComponent{
userName="";
enable =true;
enableUsername()
{
    if(this.userName=="")
        this.enable=false;
    else
        this.enable=true
return this.enable;
}
resetUserName()
{
    this.userName="";
    return this.userName;
}
}