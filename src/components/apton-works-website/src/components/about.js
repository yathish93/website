import aboutus from "../images/aboutus.png";

function About() {
  return (
    <div>
      <div className="about-head-text">
        <img className="about-head-image" src={aboutus} alt="Freedom Blog" />
        <div className="about-text-on-image">
          <p> Technology is Making Strides, and So Do We! </p>
        </div>
      </div>

      <div className="about-what-we-do">
        <h6>What We Do?</h6>
        <p className="what-we-do-tagline">
          Being a trusted blockchain-powered Web 3.0 Development Company, Apton
          Works is experienced in implementing next-generation technologies and
          also offers a gamut of 360-degree services. We offer next-generation
          blockchain and production support services across the globe. Ranging
          from smart contract development to Cloud data analytics services,
          Apton Works enhances and unlocks new potential for startups. By
          leveraging our expertise in the latest technologies, we can navigate
          the most vital leaps for organisations across diverse sectors
        </p>
      </div>
      <div className="about-who-we-are">
        <h6>Who We Are ?</h6>
        <p className="what-we-do-tagline">
          Apton Works is a trusted Web3 company of highly-seasoned Blockchain,
          DevOps and Data Analytics experts with one shared vision- To
          accelerate innovation. Having been instituted in 2018, we now have 60
          dedicated professionals working in the US and development centres in
          India. We achieved significant milestones through the years
          establishing our Analytics Practice in 2018 followed by establishing
          Blockchain practice and so on over the course of the years.
        </p>
      </div>

      <div className="about-our-vlaues">
        <h6>Our Values</h6>
        <div className="row">
          <div className="column">
            <h6>We keep you in mind</h6>
            <p className="our-vlaues-tagline">
              Our first step is to understand what you need, so we determine the
              appropriate tools. Our meetings are open to you, you will receive
              regular reports, and your feedback is absolutely crucial.
            </p>
          </div>
          <div className="column">
            <h6>Continual assistance</h6>
            <p className="our-vlaues-tagline">
              We consult with you at every stage of the cycle, identifying and
              resolving bottlenecks as soon as they arise.
            </p>
          </div>
          <div className="column">
            <h6>The latest technology</h6>
            <p className="our-vlaues-tagline">
              We use top-notch DLT tools to render matchless speed, data
              integrity, secure environment, and adaptability to our clients.
            </p>
          </div>
          <div className="column">
            <h6>We are also on our learning path </h6>
            <p className="our-vlaues-tagline">
              It's impossible for an organisation to stand still. This is
              applicable to us too. With our focus on delivering cutting-edge
              advice and service, we are continually refining our abilities and
              know-how.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
