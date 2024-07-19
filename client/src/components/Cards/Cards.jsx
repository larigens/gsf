import { Row, Col, Image, Container } from 'react-bootstrap';
import collection from '../../assets/icons/collection.png';
import creditScore from '../../assets/icons/credit-score.png';
import recourse from '../../assets/icons/recourse.png';
import nonRecourse from '../../assets/icons/non-recourse.png';
import clientCentric from '../../assets/icons/client_centric.png';
import reliability from '../../assets/icons/reliability.png';
import innovation from '../../assets/icons/innovation.png';
import flexibility from '../../assets/icons/flexibility.png';
import { useEffect, useState } from 'react';

export const Cards = ({ cardInfo }) => {
    const [imageSrcs, setImageSrcs] = useState([]);
    console.log(cardInfo);

    useEffect(() => {
        if (cardInfo && cardInfo.length > 0) {
            const images = cardInfo.map(info => {
                switch (info.image) {
                    case 'nonRecourse':
                        return nonRecourse;
                    case 'recourse':
                        return recourse;
                    case 'creditScore':
                        return creditScore;
                    case 'collection':
                        return collection;
                    case 'clientCentric':
                        return clientCentric;
                    case 'reliability':
                        return reliability;
                    case 'innovation':
                        return innovation;
                    case 'flexibility':
                        return flexibility;
                    default:
                        return '';
                }
            });
            setImageSrcs(images);
        }
    }, [cardInfo]);


    return (
        <Row className="mt-2 mb-5 d-flex justify-content-center">
            {cardInfo && cardInfo.map((info, index) => (
                <Col key={index} md={5} className="text-center m-3 ms-4 p-2 glassmorphism radius-20">
                    <Image className="img-fluid my-2 icon-color icon-80" src={imageSrcs[index]} alt={`${info.image} icon`} />
                    <Container fluid className='px-2 me-1'>
                        <p className="mb-3 text-center secondary-color fs-22">{info.title}</p>
                        <p className="text-justify fs-17 px-1">{info.description}</p>
                    </Container>
                </Col>
            ))}
        </Row>
    )
}
