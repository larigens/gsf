import { Modal, Button } from 'react-bootstrap';

export const Modals = ({ title, body, showModal, setShowModal }) => {

    const handleCloseModal = () => {
        setShowModal(false);
        window.location.replace(
            "/",
        );
    }

    return (
        <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
            <Modal.Header closeButton className="secondary-bg border-none secondary-color">
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="secondary-bg border-none dark-color">{body}</Modal.Body>
            <Modal.Footer className="secondary-bg border-none">
                <Button className='background-light border-none' onClick={handleCloseModal}>
                    Ok
                </Button>
            </Modal.Footer>
        </Modal>
    )
}