import { Component, ElementRef, EventEmitter, OnInit,Output, ViewChild } from '@angular/core';
import { Ingrediants } from 'src/app/sharedModels/ingrediants.model';
import { ShoppingListService } from '../Services/ShoppingListService.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingService : ShoppingListService) { }

  @ViewChild('shoppingItemName') shoppingItemNameref!:ElementRef
  @ViewChild('shoppingItemAmount') shoppingItemAmountref!:ElementRef

  ngOnInit(): void {
  }

  // shoppingItemName=""
  // shoppingItemAmount:number=0

  // addIngrediants:Ingrediants[]=[]
  addIngrediant(){

    console.log("native val",this.shoppingItemNameref.nativeElement.value)
    const ingName=this.shoppingItemNameref.nativeElement.value
    const ingAmount=this.shoppingItemAmountref.nativeElement.value
    const ingrediant=new Ingrediants(ingName,ingAmount)
    this.shoppingService.addIngrediants(ingrediant)


    

  }

}
