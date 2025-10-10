import { useState } from 'react';
import { Bisection } from '../method/root of equation/bisection';
import {Card,Button,FormControl,Row,Col,Stack} from 'react-bootstrap';
import 'katex/dist/katex.min.css';
import { BlockMath } from "react-katex";
import Graph from '../component/graph';
import TableComponent from '../component/table';
import BoxResult from '../component/CardResult';

export default function BisectionPage(){
    const [equation,setEquation] = useState("");
    const [xl,setXl] = useState("");
    const [xr,setXr] = useState("");
    const [result,setResult] = useState(null);    
    const [data,setData] = useState([]);
    
    const Calculate=()=>{
      
        if (equation == "") {
            setResult("No equation");
            return;
        }

        try{
            const cal = new Bisection(equation,xl,xr).solve();
            setResult(`Root ≈ ${cal.root.toFixed(6)}, ${cal.iteration} iterations`);
            setData(cal.dataStore);
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
              <BlockMath math={"f(x) = " + equation} />
              
              <FormControl  value={equation} onChange={(e)=>setEquation(e.target.value)}  
                placeholder='Input Equation' />
        
              {/* #################### xl xr ################################# */}
              <Row >
                <Col >
                  <FormControl type='number'  value={xl} onChange={(event)=>setXl(event.target.value)} placeholder="X Left" />
                </Col>
                <Col>
                  <FormControl type='number' value={xr} onChange={(event)=>setXr(event.target.value)} placeholder="X Right" />
                </Col>  
              </Row> 
              
              <Button  type="button" size="md"   onClick={Calculate} style={{background:"#000000ff",color:"#A4F600"}}>
                Calculate
              </Button>
              <BoxResult result={result}/>

              {/*  graph */}
              <Graph  myData={data}/>
              <TableComponent myData={data}/>
            </Stack>
          </Card.Body>
      </Card>
  );
}      