import { Row, Col, Image } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export const Header = (props) => {
  return (
    <header className='mb-4'>
      <Row className='mx-1 d-flex align-items-center'>
        <Col xs={{span: 6, order: 'first'}} xl={{ span: 1 }}>
          <Link to='/'>
            <div className='d-flex align-items-center my-1'> {/* Wrap image and text in a div */}
              <Image
                src={logo}
                alt="logo"
                width={100}
                className='mt-2 img-fluid'
                loading="lazy" // Lazy loading
                rel="preload" // Preloading
              />
            </div>
          </Link>
        </Col>
        <Col xs={{span: 6, order: 'second'}} xl={{ span: 11 }} className='d-flex justify-content-end ml-1'>
          {props.children}
        </Col>
      </Row>
    </header >
  );
};