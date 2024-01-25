import { Component, OnInit ,Input} from '@angular/core';
import { Recepie } from 'src/app/Recepies/recepies.model';
import { RecipeService } from '../../Services/RecepieService.service';

@Component({
  selector: 'app-recepies-item',
  templateUrl: './recepies-item.component.html',
  styleUrls: ['./recepies-item.component.css']
})
export class RecepiesItemComponent implements OnInit {

  @Input() recepie!:Recepie

  // @Output() sendItemrecepie=new EventEmitter<Recepie>();without service
  constructor(private RecepieService : RecipeService) { 
   
  }

  // itemrecepie:Recepie[]=[]

   getdata(){
    this.RecepieService.recepieSelected.emit(this.recepie)
    // this.sendItemrecepie.emit()without service


    
  }

  ngOnInit(): void {
  }

}
