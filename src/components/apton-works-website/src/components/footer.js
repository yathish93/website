import logo from "../logo.png";
import logo1 from "../images/Vector.png";
import logo6 from "../images/Vector1.png";
import logo2 from "../images/Vector2.png";
import logo3 from "../images/Vector3.png";
import logo4 from "../images/Vector4.png";
import logo5 from "../images/Vector5.png";

function Footer() {
  return (
    <div className="footer">
      <div className="col-1">
        <img src={logo} width="200px" />
        <div className="social">
          {/* <img src={logo1} alt="logo1" style={{backgroundColor: 'gray'}}/> */}
          <img src={logo6} alt="logo1" />
          <img src={logo2} alt="logo1" />
          <img src={logo3} alt="logo1" />
          <img src={logo4} alt="logo1" />
          <img src={logo5} alt="logo1" />
        </div>
      </div>
      <div className="col-2">
        <ul>
          <li>
            <a href="#"> About Us</a>
          </li>
          <li>
            <a href="#"> Web3</a>
          </li>
          <li>
            <a href="#"> Smart Contracts</a>
          </li>
          <li>
            <a href="#"> Crypto Wallet</a>
          </li>
        </ul>
      </div>

      <div className="col-3">
        <ul>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </div>

      <div className="col-4">
        <p>
          Through its tech expertise and business intelligence, Apton Works helps companies to leverage their operations and clients.{" "}
        </p>
        <form
          class="search-bar"
          traget="_blank"
        >
          <input type="text" placeholder="Email Address" name="q" />
          <button type="submit"> subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default Footer;
