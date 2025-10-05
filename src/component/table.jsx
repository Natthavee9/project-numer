import {Table} from 'react-bootstrap';

export default function TableComponent({data}){
    if (!data || data.length === 0) return null;

    return(
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>iteration</th>
          <th>Xm</th>
          <th>f(x)</th>
          <th>error</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d,i) =>(
            <tr key ={i}>
                <td>{d.iteration}</td>
                <td>{d.root.toFixed(6)}</td>
                <td>{d.fx.toFixed(6)}</td>
                <td>{d.e.toFixed(6)}</td>
            </tr>
        ))}
      </tbody>
    </Table>
    );
}