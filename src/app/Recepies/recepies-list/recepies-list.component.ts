import { Component,  OnInit} from '@angular/core';
import { Recepie } from '../recepies.model';
import { RecipeService } from '../Services/RecepieService.service';
import { RouteConfigLoadStart, Router } from '@angular/router';
@Component({
  selector: 'app-recepies-list',
  templateUrl: './recepies-list.component.html',
  styleUrls: ['./recepies-list.component.css']
})
export class RecepiesListComponent implements OnInit {

  recepie:Recepie[]=[]
  
  
  constructor(private recepeService:RecipeService,private Router:Router) {
  
    
  }

  ngOnInit(): void {


    this.recepie=this.recepeService.getRecepies()

  }


  // }

  addnewRecepie(){
    this.Router.navigate(['/Recepie/addNew'])
  }

}
