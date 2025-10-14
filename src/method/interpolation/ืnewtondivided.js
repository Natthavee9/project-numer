export class NewtonDivided{
    constructor(point,value){
        this.point = [...point];
        this.value = parseFloat(value); 
    }

    cal(i,j){
        if(i==j){
            return this.point[i].y;
        }
        else{
            return (cal(this.point.x))
        }
    }
    
}