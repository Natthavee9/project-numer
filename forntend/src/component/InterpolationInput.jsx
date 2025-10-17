import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


export default function InterpolationForm({ onCalculate }) {
  //จำนวนจุดข้อมูล (x, y)
  const [numPoints, setNumPoints] = useState(3);

  // เก็บค่า (x, y) ของแต่ละจุดเป็น array 
  const [points, setPoints] = useState([
    { x: "0", y: "0" },
    { x: "0", y: "0" },
    { x: "0", y: "0" },
  ]);

  //ค่าของ x ที่ต้องการนำไปแทนในสมการ (หา f(x))
  const [xValue, setXValue] = useState("0");
  
  //เมื่อจำนวนจุดเปลี่ยน (เพิ่มหรือลด)จะ สร้าง array ใหม่ให้พอดีกับจำนวน
  useEffect(() => {
    const newPoints = Array.from({ length: numPoints }, (_, i) => {
      return points[i] || { x: "0", y: "0" };
    });
    setPoints(newPoints);
  }, [numPoints]);

  // อัปเดตค่า x หรือ y ของจุดที่ผู้ใช้เปลี่ยนในฟอร์ม
  const handlePointChange = (index, field, value) => {
    const newPoints = [...points];
    newPoints[index][field] = value;
    setPoints(newPoints);
  };

  //ตรวจสอบความถูกต้องของข้อมูล และส่งข้อมูลให้ฟังก์ชัน onCalculate ที่มาจาก parent component
  const handleSubmit = () => {
    const numericPoints = points.map((p) => ({
      x: parseFloat(p.x),
      y: parseFloat(p.y),
    }));
    const numericXValue = parseFloat(xValue);

    if (numericPoints.some((p) => isNaN(p.x) || isNaN(p.y)) || isNaN(numericXValue)) {
      alert("❗ กรุณาใส่ค่าตัวเลขให้ครบทุกช่อง");
      return;
    }

    // เรียกฟังก์ชันเพื่อคำนวณผลลัพธ์
    onCalculate(numericPoints, numericXValue);
  };

  return (
    <div className="container   text-black  " style={{ maxWidth: "600px" }}>
      
      {/* ส่วนเลือกจำนวนจุดและค่า X */}
      <div className=" justify-content-around align-items-center mb-4">
        <div className="form-group text-center">
          <label className="fw-bold">Points</label>
          <input
            type="number"
            className="form-control text-center"
            min="1"
            value={numPoints}
            onChange={(e) => setNumPoints(parseInt(e.target.value) || 1)}
          />
        </div>

        <div className="form-group text-center">
          <label className="fw-bold"> X value f(x)</label>
          <input
            type="number"
            className="form-control text-center"
            value={xValue}
            onChange={(e) => setXValue(e.target.value)}
          />
        </div>
      </div>

      {/* ส่วนกรอกค่าของจุด (x, y) */}
      <div className="border rounded p-3 ">
        {points.map((point, index) => (
          <div key={index} className="row mb-4 align-items-center">
            
            <div className="col">
              <label className="form-label mb-1">x{index}</label>
              <input
                type="number"
                className="form-control"
                value={point.x}
                onChange={(e) => handlePointChange(index, "x", e.target.value)}
              />
            </div>

            <div className="col">
              <label className="form-label mb-1">f(x{index})</label>
              <input
                type="number"
                className="form-control"
                value={point.y}
                onChange={(e) => handlePointChange(index, "y", e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* ปุ่ม */}
      <button onClick={handleSubmit} className="btn btn-success w-100 mt-3 " style={{background:"#000000" ,color:"#a4f600"}}>
        Calculate
      </button>
    </div>
  );
}