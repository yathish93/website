import NFTMARKETPLACE3 from "../images/nftmarket.png";
import image10 from "../images/image10.png";
import image11 from "../images/image11.png";
import image12 from "../images/image12.png";
import image13 from "../images/image13.png";
import image14 from "../images/image14.png";
import image15 from "../images/image15.png";
import web3 from "../images/web3.png";
import image26 from "../images/image26.png"
import "../styles/content.css";
function Content() {
  return (
    <div>
      <div className="content-display">
        <div className="content">
          <h6>
            Generate <span className="change-color">Web3 App</span> Better and Faster, <br />
            Without a Single Line of Code!
          </h6>
          <p className="sub-content">
            We at adhere to our objective- to bring your organisation to new
            heights with the power of NO-CODE. To that objective, we can craft
            the most intuitive, fully customisable no code web3 platform. Thanks
            to cloud-based, visually driven technology, crafting the next
            billion-dollar app is no or less about coding skills or technical
            know how, but actually about ideas and design for us. Thus,
            developing no code web3 apps doesn't have to be hard, gradual and
            exorbitant, when you have us by your side.
          </p>
          <center>
            <a href="#" className="callbutton4">
              Get Started
            </a>
          </center>
        </div>
        <div className="content-image">
          <img src={web3} alt="" width="460" className="content-image-style" />
        </div>
      </div>
      <div className="second-content">
        <div className="second-content-image">
          <img src={NFTMARKETPLACE3} alt="" width="340" />
        </div>
        <div className="second-content-body">
          <h6>
            Get Your <span className="change-color">NFT Marketplace</span> Up and Running <br /> With The Industry
            Experts
          </h6>
          <p className="second-sub-content">
            NFTs are poised to make far-reaching changes industry-wide, and we
            can make it easier for you to jump on the bandwagon. Get your own
            profitable and scalable NFT marketplace and draw in the expanding
            NFT user base.A wide variety of assets can be tokenized in NFT
            markets entrenched by our company, including artworks, gaming
            collectables, physical items and more. Unlock the potential of
            blockchain and collaborate with us to establish a game-changing NFT
            marketplace!{" "}
          </p>
          <center>
            <a href="#" className="second-content-button">
              Get Started
            </a>
          </center>
        </div>
      </div>
      <div className="third-content">
        <h6>
          Translate Your Organisational Logic Into Codes and <br />
          Craft <span className="change-color-1">Smart Contracts</span> With Impeccable Functionality{" "}
        </h6>

        <p className="third-sub-content">
          We create and deploy decentralised apps working on self-regulating
          hyperledger, Ethereum, TRON and EOS smart contracts, backed by sheer
          mastery of solidity and other contract-oriented programming languages.
          Apton Works smart contract development services enable you to automate
          processes, hasten procedures, simplify entire workflows, and ensure
          security.
        </p>
        <center><a href="#" className="callbutton4">
          Get Started
        </a></center>
      </div>
      <div className="depertment-content">
        <div className="dept-img">
          <img src={image26} alt="dep_img" width="300"/>
        </div>
        <div className="dept-body">
          <h6>
            World-class <span className="change-color">Crypto Wallet</span> Development 
            Services for Smoother Transactions
          </h6>
          <p className="second-sub-content">
            Through our methodologies, we render intuitive and scalable wallets
            tailored to your specific requirements. Cryptocurrency wallets are
            designed to protect coins from deceitful access and unauthorized
            payments. By investing in our Crypto wallet development services,
            you avail yourself of a complete range of development processes,
            kickstarting with development until deployment. By combining our
            sheer know-how, the expertise of utmost standards, and technical
            skill sets, you will attain utmost proficiency.
          </p>
          <center className='second-content-button-style'>
            <a href="#" className="second-content-button">
              Get Started
            </a>
          </center>
        </div>
      </div>
      <div className="fourth-content">
        <div className="graphs">
          <p>100+</p>
          <span>Clients</span>
        </div>
        <div className="graphs">
          <p>200+</p>
          <span>Projects</span>
        </div>
        <div className="graphs">
          <p>20+</p>
          <span>Countries</span>
        </div>
        <div className="graphs">
          <p>99%</p>
          <span>On time delivery</span>
        </div>
        {/* <p className="hundred">
          100+ <br />
          <span className="clients">Clients</span>{" "}
        </p>
        <p className="hundred">
          200+ <br />
          <span className="clients">Projects</span>
        </p>
        <p className="hundred">
          20+ <br />
          <span className="clients">Countries</span>
        </p>
        <p className="hundred">
          99% <br />
          <span className="clients">On time delivery</span>
        </p> */}
      </div>
      <div className="fifth-content">
        <p className="lang-logos-header">Counted on by Global Enterprises</p>
        <p className="brand-name">
          <img src={image10} alt="" />
        </p>
        <p className="brand-name">
          <img src={image11} alt="" />
        </p>
        <p className="brand-name">
          <img src={image12} alt="" />
        </p>
        <p className="brand-name">
          <img src={image13} alt="" />
        </p>
        <p className="brand-name">
          <img src={image14} alt="" />
        </p>
        <p className="brand-name">
          <img src={image15} alt="" />
        </p>
      </div>
    </div>
  );
}
export default Content;
