import video from "../updated.mp4";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-magic-slider-dots/dist/magic-dots.css";
import Content from "../components/content";

function Main() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 100,
    initialSlide: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>

      <Slider {...settings}>
        <div>
          <p className="slider-text">
            Launch Your Dream <br />
            Web3 App With the Best
            <br /> Talents in Blockchain Technology
          </p>
          <p className="slider-tagline">
            Web3 is at the heart of what we do- we create <br /> absolute Web3
            experiences.
          </p>
        </div>
        <div>
          <p className="slider-text">
            Generate More Returns <br />
            With NFT Marketplace <br /> Development Services
          </p>
          <p className="slider-tagline">
            Interested in learning more about NFT business opportunities? <br />{" "}
            As an NFT marketplace developer, we can help!
          </p>
        </div>
        <div>
          <p className="slider-text">
            Let Us Create the Smart Contract, <br /> Let You Determine the
            Currency <br /> and Plan it Follows
          </p>
          <p className="slider-tagline">
            Transact seamlessly, transparently and safely with Apton Works'
            smart contracts.{" "}
          </p>
        </div>
      </Slider>
      <Content />
    </div>
  );
}

export default Main;
