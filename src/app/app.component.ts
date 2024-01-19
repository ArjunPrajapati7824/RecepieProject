import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'startProjectRecepie';

  setItem='Recepi'
  onSeletctedData(item:string){
    this.setItem=item

  }
}
