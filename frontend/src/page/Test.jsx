import { useState, useEffect } from "react";
import {Card,FormControl,Button,Row,Col,Stack} from "react-bootstrap"
export default function TestPage() {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Text ปัจจุบัน:", text);

    return () => console.log("Cleanup ก่อน text เปลี่ยนหรือ component ถูกลบ");
  }, [text]);

  return (
    <Card style={{margin:"5 rem" , width:"60rem"}}>
        <Card.Body>

  
    <input
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="พิมพ์ข้อความ"
    />
    </Card.Body>
    </Card>
  );
}
