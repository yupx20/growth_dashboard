import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

export default function StatusCard({
    color,
    icon,
    title,
    amount,
    percentage,
    percentageColor,
    percentageIcon,
    date,
}) {
    return (
        <div className="px-4 mb-10">
            <Card>
                <Card.Body>
                    <Row>
                        <Col xs={2}>
                            <Card.Img variant="top" src={icon} alt={icon} />
                        </Col>
                        <Col xs={10}>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{amount}</Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer>
                    <Badge variant={percentageColor}>{percentage}</Badge>
                    <span>{date}</span>
                    <i className={`mdi ${percentageIcon}`} style={{ color: percentageColor }} />
                </Card.Footer>
            </Card>
        </div>
    );
}