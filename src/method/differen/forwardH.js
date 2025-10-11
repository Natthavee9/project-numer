import { evaluate, derivative,abs,pow } from "mathjs";

export class  Forward_H{
    constructor(f,x,h){
        this.f = f ;
        this.x = parseFloat(x);
        this.h = parseFloat(h);
    }

    evaluateX(x){
        return evaluate(this.f,{x});
    }

    solve(){
        let x = this.x;
        let h = this.h;
        
        let func=(x)=>{
            return this.evaluateX(x);
        }

        const diff_1p =(x)=>{
            return (func(x+h) - func(x))/ h;
        }
    }

}