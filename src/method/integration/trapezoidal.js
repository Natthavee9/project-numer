import { evaluate } from "mathjs";

export class Trapezoidal{
    constructor(f,a,b){
        this.f = f;
        this.a = parseFloat(a);
        this.b = parseFloat(b);
    }

    evaluateX(x){
        return evaluate(this.f,{x});
    }

    solve(){
        let a = this.a;
        let b = this.b;
        let f_a = this.evaluateX(a);
        let f_b = this.evaluateX(b);
        
        let I = ((b-a)/2)*(f_a + f_b);

        return I;
    }
};