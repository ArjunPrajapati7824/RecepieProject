import { Component, EventEmitter, OnInit ,Output} from '@angular/core';
import { Recepie } from '../recepies.model';
@Component({
  selector: 'app-recepies-list',
  templateUrl: './recepies-list.component.html',
  styleUrls: ['./recepies-list.component.css']
})
export class RecepiesListComponent implements OnInit {

  recepies:Recepie[]=[]
  @Output() sendAgain=new EventEmitter<Recepie>()
  
  constructor() {
    this.recepies=[
          new Recepie('Pizza','veru cheezy','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5paige7h1aqPHYUwoAIYH3Sn336u6sXCxEw&usqp=CAU '),
          new Recepie('Burger','veru testy','https://th.bing.com/th/id/OIP.VlSmK_DeoB4oAgKoC2d1OwHaHa?rs=1&pid=ImgDetMain'),
        
        ]
      
    
  }

  onReceipeList(data:Recepie){
    this.sendAgain.emit(data)
  }
  
  // getrecepie(){
  //   console.log("getRecepie");
    
  //   this.recepies=[
  //     new Recepie('Pizza','veru cheezy','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5paige7h1aqPHYUwoAIYH3Sn336u6sXCxEw&usqp=CAU '),
  //     new Recepie('Pizza','veru cheezy','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5paige7h1aqPHYUwoAIYH3Sn336u6sXCxEw&usqp=CAU '),
    
  //   ]
  
    
  //  }

  ngOnInit(): void {
  }

}
