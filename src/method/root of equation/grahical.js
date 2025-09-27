import { evaluate } from "mathjs";

export class Graphical{
    constructor(x,start,end){
        this.x = x;
        this.start = parseFloat(start);
        this.end = parseFloat(end);
    }

    graphical_solve(){
        let start = this.start;
        let end = this.end;
        let x = this.x;

        if(Number.isNaN(start) || Number.isNaN(end)){
            throw new Error("Input not NUMBER");
        }

          try{
            fl = evaluate(f,{x:l});
            fr = evaluate(f,{x:r});
            if(Number.isNaN(fl)||Number.isNaN(fr)){
                throw new Error("ERROR! function")
            }

        }catch (err){
            throw new Error("ERROR!"); 
        }

        let e = Infinity;
        let st = this.start;
        let ed = this.end;
        let history = [];
        let root;
        let x1,x2;

        for(let i=st; i<ed ;i++){
            x1 = 


        }



    }

}