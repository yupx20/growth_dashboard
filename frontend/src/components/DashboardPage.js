import { Container, Row, Col } from "react-bootstrap";
import StatusCard from "../components/StatusCard";
import PageVisitsCard from "../components/PageVisitsCard";
import TrafficCard from "../components/TrafficCard";
import Sidebar from "../components/SideBar";
import ChartBar from "../components/ChartBar";
import ChartLine from "../components/ChartLine";
import "../styling/dashboard.css";

export default function Dashboard() {
  return (
    <>
    <div className="chart-main">

      <div className="chart-sc">
        <Sidebar />
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-5">
            <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
              <ChartLine />
            </div>
            <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
              <ChartBar />
            </div>
          </div>
        </div>
      </div>

      <div className="px-3">
                <Container fluid>
                    <Row className="mb-4">
                        <Col lg={6} xl={3} className="mb-4">
                            <StatusCard
                                color="pink"
                                icon="trending_up"
                                title="Traffic"
                                amount="350,897"
                                percentage="3.48"
                                percentageIcon="arrow_upward"
                                percentageColor="green"
                                date="Since last month"
                            />
                        </Col>
                        <Col lg={6} xl={3} className="mb-4">
                            <StatusCard
                                color="orange"
                                icon="groups"
                                title="New Users"
                                amount="2,356"
                                percentage="3.48"
                                percentageIcon="arrow_downward"
                                percentageColor="red"
                                date="Since last week"
                            />
                        </Col>
                        <Col lg={6} xl={3} className="mb-4">
                            <StatusCard
                                color="purple"
                                icon="paid"
                                title="Sales"
                                amount="924"
                                percentage="1.10"
                                percentageIcon="arrow_downward"
                                percentageColor="orange"
                                date="Since yesterday"
                            />
                        </Col>
                        <Col lg={6} xl={3} className="mb-4">
                            <StatusCard
                                color="blue"
                                icon="poll"
                                title="Performance"
                                amount="49.65%"
                                percentage="12"
                                percentageIcon="arrow_upward"
                                percentageColor="green"
                                date="Since last month"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="px-3 h-auto">
                <Container fluid>
                    <Row>
                        <Col xl={8} className="mb-4">
                            <PageVisitsCard />
                        </Col>
                        <Col xl={4} className="mb-4">
                            <TrafficCard />
                        </Col>
                    </Row>
                </Container>
            </div>
            </div>
    </>
  );
}
