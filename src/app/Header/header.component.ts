import {Component, EventEmitter,Output } from '@angular/core'

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})

export class HeaderComponent{

    @Output() sendNavigate=new EventEmitter<string>();
    
    setItemSelected(item:string){
        this.sendNavigate.emit(item)       
    }



}