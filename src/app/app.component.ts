import { Component } from '@angular/core';

// actions behind component.html with error 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world-again';

  clickEvent(){
    throw new Error("error");
    var msg='Button is Clicked';
    return msg;
  }
}

