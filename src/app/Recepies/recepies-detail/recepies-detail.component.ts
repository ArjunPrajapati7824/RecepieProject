import { Component, OnInit,Input } from '@angular/core';
import { Recepie } from '../recepies.model';
import { RecipeService } from '../Services/RecepieService.service';

@Component({
  selector: 'app-recepies-detail',
  templateUrl: './recepies-detail.component.html',
  styleUrls: ['./recepies-detail.component.css']
})
export class RecepiesDetailComponent implements OnInit {

  @Input() finalData!:Recepie
  
  constructor(private service :RecipeService) { 
    
    console.log("hello detail");
  }
  
  ngdoCheck(){
    console.log("docheck in detail",this.finalData);
  }

  addIngrediants(){
    this.service.addIngrediantsShopping(this.finalData.ingrediants)
  }

  
  ngOnInit(): void {
  //   this.finalData.push({
  //     name:"burger",
  //     description:"testy",
  //     imagePath:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5paige7h1aqPHYUwoAIYH3Sn336u6sXCxEw&usqp=CAU "
  //   })
  //   console.log(this.finalData);
    
  }



  
}
