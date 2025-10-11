import { useState } from "react";
import {Card,FormControl,Button,Row,Col,Stack} from "react-bootstrap"
import 'katex/dist/katex.min.css';
import { BlockMath } from "react-katex";
import Boxresult from "../component/CardResult"
import { CompositeTrapezoidal } from "../method/integration/composittrapzoidal";

export default function CompositeTrapezoidalPage(){
    const [equation,setEquation] = useState("");
    const [a,setA] = useState("");
    const [b,setB] = useState("");
    const [n,setN] = useState("");
    const [result,setResult] = useState("");

    const Calculate =()=>{
        try{
            const cal = new CompositeTrapezoidal(equation,a,b,n).solve();
            setResult("𝙸 ≈ " + cal.I.toFixed(6));
        }
        catch(error){
            setResult("Error: " + err.message);
        }
    }
    
    return(
        <Card style={{margin:"5rem auto" , width:"60rem"}}>
            <Card.Header as="h4" style={{textAlign:"center"}}>Composite Trapezoidal</Card.Header>
            <Card.Body>
                <Stack gap={4}>
                    <BlockMath math={"f(x) = " + equation}/>
                    <Row>
                        <Col>
                         <FormControl type="number" value={a} onChange={(e)=>setA(e.target.value)} placeholder="Input A"/>
                        </Col>
                        <Col>
                         <FormControl type="number" value={b} onChange={(e)=>setB(e.target.value)} placeholder="Input B"/>
                        </Col>
                        <Col>
                        <FormControl type="number" value={n} onChange={(e)=>setN(e.target.value)} placeholder="Input N"/>
                        </Col>
                    </Row>
                    <FormControl value={equation} onChange={(e)=>setEquation(e.target.value)} placeholder="Input equation"/>
                    <Button type="button"  onClick={Calculate} style={{background:"#000000",color:"#A4f600"}}>
                        calculate
                    </Button>
                    
                    <Boxresult myResult={result}/>
                </Stack>
            </Card.Body>
        </Card>
    )
}