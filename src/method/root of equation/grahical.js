import { evaluate } from "mathjs";

export class Graphical{
    constructor(func,start,end){
        this.func = func;
        this.start = parseFloat(start);
        this.end = parseFloat(end);
    }

    solve(){
        let start = this.start;
        let end = this.end;
        let func = this.func;

        if(Number.isNaN(start) || Number.isNaN(end)){
            throw new Error("Input not NUMBER");
        }

        let e = 0;
        let history = [];
        let root ;
        let iter = 0;
        let L,R;

        // หา interval [L,R]
        for(let i=start; i<end; i++){
            let x1 = evaluate(func, { x: i });
            let x2 = evaluate(func, { x: i+1 });
           
            if(x1*x2 <= 0){
                L = i;
                R = i+1;
                break;
            }
        }

        if(L === undefined || R === undefined){
            throw new Error("No root found in the interval");
        }

        // refine root
        let prevX = null;
        for(let i=L; i<R; i+=0.000001){
            let fx = evaluate(func, { x: i });
            
            if(prevX !== null && i !== 0){
                e = Math.abs((i - prevX)/i);
            } else {
                e = 0;
            }
            
            iter++;
            history.push({ iteration: iter, root: i, fx, e });
            
            if(Math.abs(fx) <= 0.000001){
                root = i;
                break;
            }
            prevX = i;
        }

        return { root :i, error:e, iteration: iter, history };
    }
}
