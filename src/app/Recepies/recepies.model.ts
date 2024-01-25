import { Ingrediants } from 'src/app/sharedModels/ingrediants.model';

export class Recepie{
    public name:string;
    public description : string;
    public imagePath:string;
    public ingrediants:Ingrediants[];

    constructor(name:string,description : string,imagePath:string,ingrediants:Ingrediants[]){
        this.name=name;
        this.description=description;
        this.imagePath=imagePath
        this.ingrediants=ingrediants
    }
}