import { Component, OnInit } from '@angular/core';
import { Ingrediants } from '../sharedModels/ingrediants.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {


  ingrediants:Ingrediants[]=[];

  constructor() { 
  
  }

  ngOnInit(): void {
  }

  addShoppingData(data:Ingrediants){
    console.log("before",data);
    
    this.ingrediants.push(data)
    console.log("before",this.ingrediants);

  }

}
