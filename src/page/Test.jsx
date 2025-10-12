import {useState} from "react"
import {Card,FormControl,Button, Stack,Row,Col} from "react-bootstrap"
import {Trapezoidal} from "../method/integration/trapezoidal"
import BoxResult from "../component/CardResult";
import { BlockMath } from "react-katex";


export default function TrapezoidalPP(){
    const [equation,setEquation] = useState("");
    const [a,setA] = useState("");
    const [b,setB] = useState("");
    const [result,setResult] = useState("");

    const Calculate=()=>{
        try{
             const cal = new Trapezoidal(equation,a,b).solve();
            setResult("I =" + cal.I);
        }
        catch(err){
            throw new Error("Not Result")
        }
    }

    return(
        <Card style={{margin:"5rem auto", width:"60rem"}}>
            <Card.Header as="h4" style={{textAlign:"center"}}>Trapezoidal Rule</Card.Header>
            <Card.Body> 
                <Stack gap={4}>
                    <BlockMath math={"f(x) = " + equation}/>
                    <Row>
                        <Col>
                        <FormControl value={a} onChange={(e)=>setA(e.target.value)} placeholder="input A"/>
                        </Col>
                        <Col>
                        <FormControl value={b} onChange={(e)=>setB(e.target.value)} placeholder="input B"/>
                        </Col>
                    </Row>
                    <FormControl value={equation} onChange={(e)=>setEquation(e.target.value)} placeholder="input equation"/>
                    <Button onClick={Calculate}>
                        calculate
                    </Button>
                    <BoxResult myResult={result}/>

                    
                </Stack>
            </Card.Body>
        </Card>
    )

}