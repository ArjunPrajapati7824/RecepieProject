import { EventEmitter, Injectable } from '@angular/core';
import { Recepie } from '../recepies.model';
import { Ingrediants } from 'src/app/sharedModels/ingrediants.model';
import { ShoppingListService } from 'src/app/shopping-list/Services/ShoppingListService.service';

@Injectable()
export class RecipeService{

    
    recepieSelected =new EventEmitter<Recepie>();
    
    private recepies:Recepie[]=[
        new Recepie('Pizza',
        'veru cheezy',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5paige7h1aqPHYUwoAIYH3Sn336u6sXCxEw&usqp=CAU ',
        [   
            {name:'Tomato',amount:10},
            {name:'rice',amount:20}
        ]
        
        ),
        new Recepie('Burger',
        'veru testy',
        'https://th.bing.com/th/id/OIP.VlSmK_DeoB4oAgKoC2d1OwHaHa?rs=1&pid=ImgDetMain',
        [               
            {name:'Poteto',amount:40},
            {name:'Onion',amount:50}
            
        ]
        ),
        
    ]
    
    constructor(private shoppingService : ShoppingListService){}
    addIngrediantsShopping(ingrediants:Ingrediants[]){
        this.shoppingService.addIngrediants(ingrediants)
      }

      getRecepies(){
        return this.recepies.slice()
      }


}