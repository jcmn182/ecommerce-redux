//bootstrap
import { Carousel } from 'react-bootstrap';
//images
import img1 from '../../assets/img/classic-men-casual-outfits-with-accessories-on-table.jpg';
import img2 from '../../assets/img/closeup-shot-of-female-wearing-beautiful-silver-necklace-with-pendant.jpg';
import img3 from '../../assets/img/set-with-fashionable-women-s-clothing-shirt-jeans-and-bag-trendy-hipster-look-flat-lay.jpg';
import img4 from '../../assets/img/top-view-of-set-of-gadgets-in-purple-neon-light-and-pink.jpg';

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
                        <h3>Men's clothing</h3>
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
                        <h3>Jewelery</h3>
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
                        <h3>Women's clothing</h3>
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
                        <h3>Electronics</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>     
        </>
    )
}
