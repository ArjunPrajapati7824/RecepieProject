import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[appdropdownDir]'

})
export class DropDownDirective{

    @HostBinding('class.open') isOpen=false;

    @HostListener('click') toggleItem(){
        this.isOpen=!this.isOpen
    }
    
}