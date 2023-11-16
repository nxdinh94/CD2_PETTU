import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Table } from 'reactstrap';
import './QLSP.scss';

function QLSP() {
    return (
        <div className="content">
            <div className="div-title">
                <p className="my-0"> Database hoa don</p>
            </div>
            <div className="div-content">
                <h1>Thống kê</h1>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>Username</th>
                            <th>Username</th> 
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default QLSP;
