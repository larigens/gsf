import { Form, Button, Row, Col } from 'react-bootstrap';

export const FormCP = () => {
    return (
        <Form className='glassmorphism light-shades p-4'>
            <h2>Connect with Us</h2>
            <p className='fs-17'>Fill out this form, and one of our Business Development Officers will promptly contact you to provide personalized answers and assistance!</p>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control required type="text" placeholder="Enter first name" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control required type="text" placeholder="Enter last name" />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="emailAddress">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required type="email" placeholder="Enter email" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="phoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control required type="phone" placeholder="Enter phone number" />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="mcNumber">
                        <Form.Label>MC Number</Form.Label>
                        <Form.Control type="number" placeholder="Mc Number" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="referral">
                        <Form.Label>Who referred you to us?</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control required as="textarea" rows={3} />
            </Form.Group>
            <Row className='d-flex justify-content-end mx-1'>
                <Button className='submit-btn radius-20' type="submit">
                    Submit
                </Button>
            </Row>
        </Form>

    )
}