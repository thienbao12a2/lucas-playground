import Carousel from "react-bootstrap/Carousel";

function Slider() {
  return (
    <div className="container">
      <Carousel className="slider mt-4">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://bao-ton.s3.amazonaws.com/nixsw1vpke8ueqo794ho.webp"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://bao-ton.s3.amazonaws.com/309108269_570685008182741_8085379527507264953_n.png"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
