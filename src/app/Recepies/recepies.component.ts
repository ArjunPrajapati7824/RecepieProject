import { Component, OnInit } from '@angular/core';
import { Recepie } from './recepies.model';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent implements OnInit {

  constructor() { }

  static val=false
  ngOnInit(): void {
    console.log("oninit load");
      
  }

  setItemRecipe!:Recepie

  // ngDoCheck(){
  // console.log("receipe compoent event data",this.setItemRecipe);
    
  // }
  

  // itemrecepie:Recepie[]=[]

  // setItemRecipef(data:Recepie){
   
  //   this.setItemRecipe.push(data)
  //   RecepiesComponent.val=true
  //   console.log("getData item",this.setItemRecipe);
  //   // this.itemrecepie.push(data)
  //   // this.itemrecepie.push(data)
    
  // }
  

}
