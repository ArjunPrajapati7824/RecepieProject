import { Component, OnInit,Input } from '@angular/core';
import { Recepie } from '../recepies.model';
import { RecipeService } from '../Services/RecepieService.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-recepies-detail',
  templateUrl: './recepies-detail.component.html',
  styleUrls: ['./recepies-detail.component.css']
})
export class RecepiesDetailComponent implements OnInit {

  finalData!:Recepie
  id:number=0
  

  constructor(private service :RecipeService,private activeRoute:ActivatedRoute) { 
    
  }
  
  
  ngOnInit(): void {
    this.activeRoute.params.subscribe(paramId=>{
      
      this.id=+paramId['id']
      this.finalData=this.service.getRecepieId(this.id)
    })   

   
  }

  addIngrediants(){
    console.log(this.finalData.ingrediants);
    
    this.service.addIngrediantsShopping(this.finalData.ingrediants)
  }

  



  
}
