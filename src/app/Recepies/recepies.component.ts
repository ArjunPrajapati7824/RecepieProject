import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recepie } from './recepies.model';
import { RecipeService } from './Services/RecepieService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent implements OnInit {
  // setItemRecipe!:Recepie


  constructor() { }


  ngOnInit(): void {


    //  this.recepeService.recepieSelected.subscribe((recipe:Recepie)=>{
    //   console.log(recipe);
            
    //   this.setItemRecipe=recipe

    console.log("oninit load");
     }


      
  }





