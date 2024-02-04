import { Component, OnInit } from '@angular/core';
import { Ingrediants } from '../sharedModels/ingrediants.model';
import { ShoppingListService } from './Services/ShoppingListService.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {


  ingrediants:Ingrediants[]=[];

  constructor(private serviceShopping:ShoppingListService) { 
  
  }

  ngOnInit(): void {
    this.ingrediants=this.serviceShopping.getIngrediants()

    // this.serviceShopping.shoppingItemChange.subscribe(e=>{
    //   this.ingrediants.push(e)
    //   console.log(this.ingrediants);
      
    // })


  }



  

}
