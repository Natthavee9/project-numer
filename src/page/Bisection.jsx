import { useState } from 'react';
import { Bisection } from '../method/root of equation/bisection';
import {Card,Button,Table,Form, FormControl,Row,Col,Stack} from 'react-bootstrap';
import 'katex/dist/katex.min.css';
import { BlockMath } from "react-katex";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, ReferenceLine, Legend } from 'recharts';
import Graph from '../component/graph';

export default function CalBisection(){
    const [equation,setEquation] = useState("");
    const [xl,setXl] = useState("");
    const [xr,setXr] = useState("");
    const [errr,setError] = useState("0.000001");
    const [result,setResult] = useState(null);    
    const [data,setData] = useState([]);
    
    const Calculate=()=>{
        if (equation == "") {
            setResult("No equation");
            return;
        }

        try{
            const cal = new Bisection(equation,xl,xr).bisection_solve();
            setResult(`Root ≈ ${cal.root.toFixed(6)},Error ≈ ${cal.error.toFixed(6)}, ${cal.iteration} iterations`);
            setData(cal.history); //Table
        }
        catch (err){
            setResult(`Error: ${err.message}`);
            setData([]);
        }
    };

    return (
      <Card style={{ margin: '5rem auto' , width:'60rem'}}>
        <Card.Header as="h4" style={{textAlign:'center'}}>Bisection Method</Card.Header>
          <Card.Body>
            <Stack gap={4}>
              <BlockMath math={`f(x) = ${equation}`} />
              
              <FormControl  value={equation} onChange={(e)=>setEquation(e.target.value)}  
                placeholder='Input Equation' />
        
              {/* #################### xl xr ################################# */}
              <Row >
                <Col >
                  <FormControl type='number'  value={xl} onChange={(e)=>setXl(e.target.value)} placeholder="X Left" />
                </Col>
                <Col>
                  <FormControl type='number' value={xr} onChange={(e)=>setXr(e.target.value)} placeholder="X Right" />
                </Col>  
              </Row> 
              
              <Button  type="button" size="md"   onClick={Calculate}>
                Calculate
              </Button>
              
              {/*  graph */}
              {data.length > 0 && <Graph  data={data}/>}
              

            
            </Stack>

          </Card.Body>
      </Card>
  
  );
}      