import {  Injectable } from '@angular/core';
import { Recepie } from '../recepies.model';
import { Ingrediants } from 'src/app/sharedModels/ingrediants.model';
import { ShoppingListService } from 'src/app/shopping-list/Services/ShoppingListService.service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class RecipeService{

    
    // recepieSelected =new BehaviorSubject<Recepie>(new Recepie('Pizza',
    // 'veru cheezy',
    // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5paige7h1aqPHYUwoAIYH3Sn336u6sXCxEw&usqp=CAU ',
    // [   
    //     new Ingrediants('Tomato',10),
    //     new Ingrediants('Rice',20),
    // ]
    
    // ));
    
    private recepies:Recepie[]=[
        new Recepie('Pizza',
        'veru cheezy',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5paige7h1aqPHYUwoAIYH3Sn336u6sXCxEw&usqp=CAU ',
        [   
            new Ingrediants('Tomato',10),
            new Ingrediants('Rice',20),
        ]
        
        ),
        new Recepie('Burger',
        'veru testy',
        'https://th.bing.com/th/id/OIP.VlSmK_DeoB4oAgKoC2d1OwHaHa?rs=1&pid=ImgDetMain',
        [               
            new Ingrediants('Onion',100),
            new Ingrediants('Poteto',50),
            
        ]
        ),
        
    ]
    
    constructor(private shoppingService : ShoppingListService){}
    addIngrediantsShopping(ingrediants:Ingrediants[]){
        this.shoppingService.addIngrdiantFromRecepie(ingrediants)
      }

      getRecepies(){
        return this.recepies.slice()
      }


      getRecepieId(id:number){
        return this.recepies[id]

      }

}