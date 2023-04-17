import Carousel from "react-bootstrap/Carousel";

function Slider() {
  return (
    <div className="container">
      <Carousel className="slider mt-4">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.miracle-recreation.com/content/uploads/2018/11/Image-Header_Park.jpg.webp"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static8.depositphotos.com/1471604/1008/i/600/depositphotos_10085666-stock-photo-playground.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://kraken39s.com/wp-content/uploads/2018/10/IMG_3876_1.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
