import { Component, OnInit ,Input} from '@angular/core';
import { Recepie } from 'src/app/Recepies/recepies.model';
import { RecipeService } from '../../Services/RecepieService.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recepies-item',
  templateUrl: './recepies-item.component.html',
  styleUrls: ['./recepies-item.component.css']
})
export class RecepiesItemComponent implements OnInit {


  @Input() recepie!:Recepie
  @Input() id!:number
  


  // data!:Recepie

  // @Output() sendItemrecepie=new EventEmitter<Recepie>();without service
  constructor(private RecepieService : RecipeService
    ,private Router:Router
    ,private activeRoute:ActivatedRoute) { 

    // this.recepie=this.RecepieService.getRecepies()
    // console.log(this.recepie,"get data");
    
   
  }

  // itemrecepie:Recepie[]=[]

  //  getdata(data:Recepie){
  //   console.log("get data called");
    
  //     this.RecepieService.recepieSelected.next(data)

  //     this.Router.navigate(['/Recepie/recepieDetail'])
  //   // this.sendItemrecepie.emit()without service


    
  // }

  ngOnInit(): void {
  }

}
