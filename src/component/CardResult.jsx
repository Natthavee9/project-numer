// component/BoxResult.jsx
import Card from 'react-bootstrap/Card';

function BoxResult({ result }) {
  if (!result) return null; // ถ้าไม่มี result ไม่ต้องแสดง

  return (
    <Card style={{background:"#A4f600" , textAlign:"center"}}>
      <Card.Body>
       
          <div> {result}</div>
       
      </Card.Body>
    </Card>
  );
}

export default BoxResult;
