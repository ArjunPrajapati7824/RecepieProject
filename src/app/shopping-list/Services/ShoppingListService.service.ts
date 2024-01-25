import { EventEmitter } from "@angular/core";
import { Ingrediants } from "src/app/sharedModels/ingrediants.model";

export class ShoppingListService{

    private shoppingList:Ingrediants[]=[]

    shoppingItemChange=new EventEmitter<Ingrediants>();


    addIngrediants(ingrediants:Ingrediants){
        this.shoppingList.push(ingrediants)
    }

    getIngrediants(){
        return this.shoppingList
    }

    addIngrdiantFromRecepie(ingrediants:Ingrediants[]){
      this.shoppingList.push(...ingrediants)
    }
     

    
}