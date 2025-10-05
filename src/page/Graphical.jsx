import { useState } from 'react';
import { Graphical } from '../method/root of equation/grahical';
import {Card,Button,FormControl,Row,Col,Stack} from 'react-bootstrap';
import 'katex/dist/katex.min.css';
import { BlockMath } from "react-katex";
import Graph from '../component/graph';
import Table from '../component/table';
import TableComponent from '../component/table';

export default function GraphicalPage(){
    const [equation,setEquation] = useState("");
    const [xStart,setXs] = useState("");
    const [xEnd,setXe] = useState("");
    const [result,setResult] = useState(null);    
    const [data,setData] = useState([]);
    
    const Calculate=()=>{
        if (equation === "") {
            setResult("No equation");
            return;
        }
    
        try{
            const cal = new Graphical(equation,parseFloat(xStart), parseFloat(xEnd)).solve();
            setResult(`Root ≈ ${cal.root.toFixed(6)},Error ≈ ${cal.error.toFixed(6)}, ${cal.iteration} iterations`);
            console.log("History -> ",cal.history)
            setData(cal.history); //Table
        }
        catch (err){
            setResult(`Error: ${err.message}`);
            setData([]);
        }
    };

    return (
          <Card style={{ margin: '5rem auto' , width:'60rem'}}>
            <Card.Header as="h4" style={{textAlign:'center'}}>Graphical Method</Card.Header>
              <Card.Body>
                <Stack gap={4}>
                  <BlockMath math={`f(x) = ${equation}`} />
                  
                  <FormControl  value={equation} onChange={(e)=>setEquation(e.target.value)}  
                    placeholder='Input Equation' />
            
                  {/* #################### xl xr ################################# */}
                  <Row >
                    <Col >
                      <FormControl type='number'  value={xStart} onChange={(e)=>setXs(e.target.value)} placeholder="X start" />
                    </Col>
                    <Col>
                      <FormControl type='number' value={xEnd} onChange={(e)=>setXe(e.target.value)} placeholder="X end" />
                    </Col>  
                  </Row> 
                  
                  <Button  type="button" size="md"   onClick={Calculate}>
                    Calculate
                  </Button>
                  
                  {/*  graph */}
                 
                </Stack>
              </Card.Body>
          </Card>
      );
}