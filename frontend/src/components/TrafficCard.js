import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function TrafficCard() {
    return (
        <Card>
            <Card.Header as="h5" className="bg-purple text-white">
                <div className="d-flex justify-content-between">
                    <span>Social Media</span>
                    <Button variant="link" size="lg" className="text-white">
                        See More
                    </Button>
                </div>
            </Card.Header>
            <Card.Body>
                <Table striped bordered hover responsive>
                    <thead className="thead-light">
                        <tr>
                            <th>Referral</th>
                            <th>Visitors</th>
                            <th>Progress</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Facebook</td>
                            <td>1,480</td>
                            <td>
                                <ProgressBar variant="blue" now={60} />
                            </td>
                        </tr>
                        <tr>
                            <td>Google</td>
                            <td>4,807</td>
                            <td>
                                <ProgressBar variant="danger" now={80} />
                            </td>
                        </tr>
                        <tr>
                            <td>Instagram</td>
                            <td>3,678</td>
                            <td>
                                <ProgressBar variant="indigo" now={75} />
                            </td>
                        </tr>
                        <tr>
                            <td>Twitter</td>
                            <td>2,645</td>
                            <td>
                                <ProgressBar variant="info" now={90} />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
}