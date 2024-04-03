import { Row, Col, Image } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export const Header = (props) => {
  return (
    <header className='mb-4'>
      <Row className='d-flex align-items-center me-auto'>
        <Col xs={{ span: 6, order: 'first' }} lg={{ span: 1 }}>
          <Link to='/'>
            <Image
              src={logo}
              alt="logo"
              width={100}
              className='my-2 ps-2 img-fluid'
              loading="lazy" // Lazy loading
              rel="preload" // Preloading
            />
          </Link>
        </Col>
        <Col xs={{ span: 6, order: 'second' }} lg={{ span: 11 }} className='d-flex justify-content-end'>
          {props.children}
        </Col>
      </Row>
    </header >
  );
};