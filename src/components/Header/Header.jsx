import { Container, Row, Col, Image } from 'react-bootstrap';
import logo from '../../assets/logo.png';

export const Header = (props) => {
  return (
    <Container style={{ display: 'flex' }}>
      <Row lg={2} style={{ display: 'flex', alignItems: 'center' }}>
        <Col lg={{ order: 1 }}>
          <Image
            src={logo}
            alt="gsf logo"
            width={85}
            style={{ margin: '12px 10px' }}
          />
        </Col>
        <Col lg={{ order: 2 }}>
          {props.children}
        </Col>
      </Row>
    </Container>
  );
};