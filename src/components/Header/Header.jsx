import { Container, Row, Col, Image } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export const Header = (props) => {
  return (
    <Container className='d-flex'>
      <Row lg={2} className='align-items-center'>
        <Col sm={{ order: 1 }} style={{ flex: '0 0 auto', width: 'auto' }}>
          <Link to='/'>
            <Image
              src={logo}
              alt="gsf logo"
              width={85}
              style={{ margin: '12px 10px' }}
            />
          </Link>
        </Col>
        <Col lg={{ order: 2 }} style={{ flex: '1' }}>
          {props.children}
        </Col>
      </Row>
    </Container>
  );
};