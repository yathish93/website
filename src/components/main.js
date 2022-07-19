import video from "../updated.mp4";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-magic-slider-dots/dist/magic-dots.css";
import Content from "../components/content";

function Main() {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 600,
    initialSlide: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>

      <Slider {...settings}>
        <div>
          <p className="slider-text">
            Launch Your Dream <br />
            <span className="change-color">Web3 App </span>With the Best
            <br /> Talents in Blockchain Technology
          </p>
          <p className="slider-tagline">
            Web3 is at the heart of what we do - we create absolute Web3
            experiences.
          </p>
          <center>
            <a href="#" className="callbutton4">
              Schedule a call{" "}
            </a>
          </center>
        </div>
        <div>
          <p className="slider-text">
            Generate More Returns <br />
            With <span className="change-color">NFT Marketplace </span>
            <br /> Development Services
          </p>
          <p className="slider-tagline">
            Interested in learning more about NFT business opportunities? <br />
            As an NFT marketplace developer, we can help!
          </p>
          <center>
            <a href="#" className="callbutton4">
              Schedule a call{" "}
            </a>
          </center>
          <br />
          <br />
        </div>
        <div>
          <p className="slider-text">
            Let Us Create the{" "}
            <span className="change-color">Smart Contract,</span> <br /> Let You
            Determine the Currency <br /> and Plan it Follows
          </p>
          <p className="slider-tagline">
            Transact seamlessly, transparently and safely with Apton Works'
            smart contracts.{" "}
          </p>
          <center>
            <a href="#" className="callbutton4">
              Schedule a call{" "}
            </a>
          </center>
        </div>
      </Slider>

      <Content />
    </>
  );
}

export default Main;
