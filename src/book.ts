import { InterfaceBook } from "./interface";
export class Book implements InterfaceBook{
    name : string = ""
    rating : number = 1
    constructor(bvs : string, vs1 : number){
        this.name = bvs
        if (vs1 <= 0){
            throw new Error("A rating nem lehet 1 kevesebb")
        }
        else if(vs1){
            throw new Error("A rating nem lehet 10 nagyobb")
        }
        else{
            this.rating = vs1
        }
    }

    toString() : void {
         console.log(this.name + "könyvnek a ratingje: " + this.rating)
    }
}
