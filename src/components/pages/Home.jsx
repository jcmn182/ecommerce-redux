//bootstrap
import { Carousel } from 'react-bootstrap';
//images
<<<<<<< HEAD:src/components/Views/Home.jsx
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/arnel-hasanovic-4oWSXdeAS2g-unsplash.jpg';
import img3 from '../../assets/images/brandon-romanchuk-xpe7pyNmEbw-unsplash.jpg';
import img4 from '../../assets/images/miguel-tomas-fPZyN5Eih5E-unsplash.jpg';
// components
import { CardProduct } from '../CardProduct.jsx'
import { LayOut } from '../LayOut.jsx';
import { Filter } from '../buttons/Filter.jsx'
// react hooks
import {useState, useEffect} from 'react'
=======
import img1 from '../../assets/img/classic-men-casual-outfits-with-accessories-on-table.jpg';
import img2 from '../../assets/img/closeup-shot-of-female-wearing-beautiful-silver-necklace-with-pendant.jpg';
import img3 from '../../assets/img/set-with-fashionable-women-s-clothing-shirt-jeans-and-bag-trendy-hipster-look-flat-lay.jpg';
import img4 from '../../assets/img/top-view-of-set-of-gadgets-in-purple-neon-light-and-pink.jpg';
>>>>>>> redux/thunk:src/components/pages/Home.jsx

export const Home = () => {

    const [dimensions, setDimensions] = useState({ 
        width: window.innerWidth
      })
      
      useEffect(() => {

        function handleResize() {
          setDimensions({
            width: window.innerWidth
          })
         } 
         window.addEventListener('resize', handleResize)
         console.log(dimensions.width)
      },[dimensions])

    
    const screen = 900
    const start = 'start'
    const bottom = 'bottom'

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
<<<<<<< HEAD:src/components/Views/Home.jsx
            </Carousel>
            <Filter placement={dimensions.width<screen?bottom:start}/>
            <LayOut>
                <CardProduct/>    
            </LayOut>
=======
            </Carousel>     
>>>>>>> redux/thunk:src/components/pages/Home.jsx
        </>
    )
}
