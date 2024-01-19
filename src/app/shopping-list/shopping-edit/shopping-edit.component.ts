import { Component, ElementRef, EventEmitter, OnInit,Output, ViewChild } from '@angular/core';
import { Ingrediants } from 'src/app/sharedModels/ingrediants.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor() { }

  @ViewChild('shoppingItemName') shoppingItemNameref!:ElementRef
  @ViewChild('shoppingItemAmount') shoppingItemAmountref!:ElementRef

  @Output() addShoppingData=new EventEmitter<Ingrediants>()
  ngOnInit(): void {
  }

  // shoppingItemName=""
  // shoppingItemAmount:number=0

  // addIngrediants:Ingrediants[]=[]
  addIngrediant(){

    console.log("native val",this.shoppingItemNameref.nativeElement.value)
    const ingName=this.shoppingItemNameref.nativeElement.value
    const ingAmount=this.shoppingItemAmountref.nativeElement.value
    const data=new Ingrediants(ingName,ingAmount)
      // this.shoppingItemName=this.shoppingItemNameref
      // this.shoppingItemName=this.shoppingItemAmountref
      // this.addIngrediants.push(data)
      this.addShoppingData.emit(data)
  }

}
