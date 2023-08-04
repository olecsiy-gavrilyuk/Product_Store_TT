import { Col, Form, FormControl, Button, Container, Row } from 'react-bootstrap';
import SvgLogo from './SvgLogo';
import DateTime from './DateTime';

const Header = () => {

  return (
    <header className="header bg-light py-3">
        <Row className="align-items-center justify-content-space-between">
          <Col xs="auto">
            <SvgLogo />
          </Col>
          <Col>
            <Form className="justify-content-center">
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            </Form>
          </Col>
          <Col xs="auto">
            <DateTime />
          </Col>
        </Row>
    </header>
  );
}

export default Header;