import { Row, Col } from "react-bootstrap";
import './MyFooter.css';

const MyFooter = () => (
    <footer className="footer">
        <Row className="text-center mt-5">
            <Col xs={{ span: 6, offset: 3 }}>
                <Row>
                    <Col xs={12} className="text-left mb-2 mt-2 copyright">
                        © ReactRubrica - {new Date().getFullYear()} Fabrizio D'Alessandro
                    </Col>
                </Row>
            </Col>
        </Row>
    </footer>
);

export default MyFooter;