//bootstrap
import { Carousel } from 'react-bootstrap'
//images
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/arnel-hasanovic-4oWSXdeAS2g-unsplash.jpg';
import img3 from '../../assets/images/brandon-romanchuk-xpe7pyNmEbw-unsplash.jpg';
import img4 from '../../assets/images/miguel-tomas-fPZyN5Eih5E-unsplash.jpg';
// components
import { CardProduct } from '../CardProduct.jsx'
import { LayOut } from '../LayOut.jsx';
export const Home = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <div className="img-responsive">
                        <img
                        className="d-block w-100 img-height"
                        src={img1}
                        alt="First slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="img-responsive">
                        <img
                        className="d-block w-100 img-height"
                        src={img2}
                        alt="Second slide"
                        />
                    </div>    
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="img-responsive">
                        <img
                        className="d-block w-100 img-height"
                        src={img3}
                        alt="Third slide"
                        />
                    </div>    
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="img-responsive">
                        <img
                        className="d-block w-100 img-height"
                        src={img4}
                        alt="Third slide"
                        />
                    </div>    
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <LayOut>
                <CardProduct/>    
            </LayOut>
        </>
    )
}