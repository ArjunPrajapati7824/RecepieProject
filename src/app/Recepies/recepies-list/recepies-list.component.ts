import { Component,  OnInit} from '@angular/core';
import { Recepie } from '../recepies.model';
import { RecipeService } from '../Services/RecepieService.service';
@Component({
  selector: 'app-recepies-list',
  templateUrl: './recepies-list.component.html',
  styleUrls: ['./recepies-list.component.css']
})
export class RecepiesListComponent implements OnInit {

  recepies:Recepie[]=[]
  
  
  constructor(private recepeService : RecipeService) {
  
    
  }

  ngOnInit(): void {
    this.recepies=this.recepeService.getRecepies()
  }

}
