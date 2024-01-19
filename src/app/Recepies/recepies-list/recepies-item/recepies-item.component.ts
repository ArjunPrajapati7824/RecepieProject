import { Component, OnInit ,Input,Output, EventEmitter} from '@angular/core';
import { Recepie } from 'src/app/Recepies/recepies.model';

@Component({
  selector: 'app-recepies-item',
  templateUrl: './recepies-item.component.html',
  styleUrls: ['./recepies-item.component.css']
})
export class RecepiesItemComponent implements OnInit {

  @Input() recepie!:Recepie

  @Output() sendItemrecepie=new EventEmitter<Recepie>();
  constructor() { 
   
  }

  // itemrecepie:Recepie[]=[]

  getdata(data:Recepie){
    this.sendItemrecepie.emit(data)
    // this.itemrecepie.push(data)
    console.log("getData recepie item",data);
    // this.itemrecepie.push(data)
    // this.itemrecepie.push(data)
    
  }

  ngOnInit(): void {
  }

}
