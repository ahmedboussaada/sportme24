



import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./slideshow.css";
import Col from 'react-bootstrap/Col';

function ControlledCarousel() {
	const [index, setIndex] = useState(0);
  
	const handleSelect = (selectedIndex, e) => {
	  setIndex(selectedIndex);
	};
  
	return (
		<Col xs={6}>
	  <Carousel activeIndex={index} onSelect={handleSelect} className="Carousel">
		<Carousel.Item className="Carousel-Item">
		  <img
			className="d-block w-100"
			src="img/daraji.jpg"
			alt="First slide"
		  />
		  <Carousel.Caption>
			<h3>First slide label</h3>
			<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
		  </Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
		  <img
			className="d-block w-100"
			src="img/messi.jpg"
			alt="Second slide"
		  />
  
		  <Carousel.Caption>
			<h3>Second slide label</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
		  </Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
		  <img
			className="d-block w-100"
			src="img/haaland.png"
			alt="Third slide"
		  />
  
		  <Carousel.Caption>
			<h3>Third slide label</h3>
			<p>
			  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
			</p>
		  </Carousel.Caption>
		</Carousel.Item>
	  </Carousel>
	  </Col>
	);
  }
   

  export default ControlledCarousel;