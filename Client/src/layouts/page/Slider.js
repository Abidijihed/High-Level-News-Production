import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://image.shutterstock.com/image-vector/breaking-news-background-tv-channel-260nw-1902835036.jpg"
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
          src="https://thumbs.dreamstime.com/z/diffus%C3%A9-en-direct-%C3%A0-la-t%C3%A9l%C3%A9vision-des-derni%C3%A8res-nouvelles-avec-le-globe-sur-l-illustration-bleue-de-fond-gradient-panorama-185818606.jpg"
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
          src="https://c8.alamy.com/comp/KFEW72/graphical-digital-news-background-with-arrows-and-news-text-KFEW72.jpg"
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
  );
}

export default Slider;