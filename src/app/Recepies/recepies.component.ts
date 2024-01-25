import { Component, OnInit } from '@angular/core';
import { Recepie } from './recepies.model';
import { RecipeService } from './Services/RecepieService.service';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent implements OnInit {
  setItemRecipe!:Recepie

  constructor(private recepeService:RecipeService) { }

  ngOnInit(): void {
     this.recepeService.recepieSelected.subscribe((recipe:Recepie)=>{
      this.setItemRecipe=recipe
     })
    console.log("oninit load");
      
  }




}
