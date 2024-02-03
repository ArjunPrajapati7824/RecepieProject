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

    // this.recepies=this.recepeService.getRecepies()
  }

  // getdata(data:Recepie){
  //   console.log("get data called");
    
  //     this.recepeService.recepieSelected.next(data)

  //     this.Router.navigate(['/Recepie/recepieDetail',1])
  //   // this.sendItemrecepie.emit()without service


    
  // }

  addnewRecepie(){
    this.Router.navigate(['/Recepie/addNew'])
  }

}
