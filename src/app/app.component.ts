import { Component } from '@angular/core';
import { Recepie } from './Recepies/recepies.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'startProjectRecepie';

  clickItem!:Recepie

  getItem(item:Recepie){
    this.clickItem=item
  }
}
