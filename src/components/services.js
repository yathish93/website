import services from "../images/services.png";
import wallet from "../images/wallet.png";
import Etherium from "../images/Etherium.png";
import Sol from "../images/Sol.png";
import NFTMARKETPLACE3 from "../images/nft_service.png";

function Services() {
  return (
    <div>
      <div className="blockchain-head-text">
        {/* <img className="about-head-image" src={services} alt="Freedom Blog" /> */}
        <div className="blockchain-text-on-image">
          <p> Blockchain and Web3 Services </p>
        </div>
      </div>
      <div className="about-what-we-do">
        <div className="container row">
          <div className="first line col">
            Apton Works, a Web3 development company, is committed to assisting
            you with building Web3 applications and products. Our team's
            competencies enable forward-thinking organisations in the fields of
            branding, user experience design, mobile development, research &
            testing, and strategy consulting for one-of-a-kind Web 3 activities.
          </div>
          <div className="second col">
            Wallet implementation <br />
            Smart Contracts for Ethereum (Solidity) and Solana (Rust)
            <br /> DAO design and implementation <br />
            NFT design and minting <br />
            Hyperledger implementation
          </div>
        </div>
      </div>
      <div className="service-3">
        <div className="container3 row">
          <div className="second3 line col">
            <h5>Deep Expertise</h5>
            <p className="deep-expert1">
              We have extensive skills in a variety of technologies, namely
              blockchain, Web3, smart wallet, DAO, NFT, Data Analytics and
              beyond.
            </p>
          </div>
          <div className="second3 line col">
            <h5> Building Ideas With Passion</h5>
            <p className="deep-expert1">
              We render straightforward business intelligence by putting forward
              unique ideas consistently with our expertise. With the assistance
              of an enthusiastic team, let's bring out your magic.
            </p>
          </div>
          <div className="second3 col">
            <h5>International Delivery Network</h5>
            <p className="deep-expert1">
              We have a global distribution network that spans three distinct
              locations which can provide top-notch blockchain-powered solutions
              at competitive prices.
            </p>
          </div>
        </div>
      </div>

      <div className="wallet-implementation">
        <div className="wallet">
          <h6>Wallet Implementation</h6>
          <p className="sub-content padding-10">
            If you’re a crypto exchange owner who wants to implement a crypto
            wallet to bolster your platform’s security, or if you are a trader
            seeking out an optimum platform to stock your crypto assets for
            trading, then we got you covered.The team here at Apton specializes
            in the implementation of cryptocurrency wallets, making the most of
            its know-how in blockchain technology. Our team of talented
            engineers works with you to create the ideal cryptocurrency wallet
            for your organisation. We assist organisations across the world to
            implement, test, and maintain cryptocurrency wallets, no matter what
            type, how many users they have, or how they store their data. As a
            result, individuals can manage their cryptocurrencies from only one
            dashboard at a time with ease.
          </p>
        </div>
        <div className="wallet-image">
          <img src={wallet} alt="" width="450" />
        </div>
      </div>

      <div className="smart-contracts">
        <p className="lang-logos-header">Smart Contracts </p>

        <div className="container row">
          <div className="first4 col">
            <img src={Etherium} alt="" />
            <span className="service-page-label"> Ethereum </span>
            <p>
              Our Ethereum smart contract solutions are driven by a medley of
              technical dexterity, strategic thinking, and a design-thinking
              approach. Our team of experts can craft highly dependable and safe
              smart contracts to meet your business requirements. Increase your
              organisation’s efficiency by using Solidity-powered smart
              contracts for all of its processes.
            </p>
          </div>
          <div className="first4 col">
            <img src={Sol} alt="" />{" "}
            <span className="service-page-label">Solana</span>
            <p>
              A Smart Contract provides an integrated and spontaneous framework
              between the stakeholders without the intrusion of arbiters. By
              rendering self-administering Solana Smart Contracts that can be
              handled by diverse devices, Apton Works is an industry leader in
              Solana Blockchain Development. The professionals at our company
              will ensure that your documents are completely encoded so that
              they can't be stolen by anyone.
            </p>
          </div>
        </div>
      </div>
      <div className="blockchain-what-we-do">
        <h6>DAO Design and Implementation</h6>
        <p className="blockchain-what-we-do-tagline">
          Apton Works is a DAO design and implementation company striving to
          enhance and spread blockchain technology across the globe. We do our
          best in fundamentally switching conventional corporations with the
          Decentralised Autonomous Organisations, through a notion of
          distributed wealth and decentralisation. Our DAO design and
          implementation services are the best in the industry. We translate our
          client’s vision into something scalable and reliable, and we strive to
          exceed our clients’ expectations. Our focus is exclusively on
          blockchain technology. It is a goal to make a real difference and
          ensure that you will receive valuable service from us.
        </p>
      </div>

      <div className="second-content">
        <div className="second-blockchain-image">
          <img
            src={NFTMARKETPLACE3}
            alt=""
            width="450px"
            className="second-blockchain-image-custom"
          />
        </div>
        <div className="second-content-body padding-20">
          <h6>NFT Design and Mining</h6>
          <p className="nft-second-sub-content">
            Breathe life into your NFT ideas with groundbreaking and
            leading-edge NFT solutions with a smooth trading experience by Apton
            Works. We’re a competent Non-Fungible Token design and minting
            company offering worthwhile back-to-back NFT Development services
            right from NFT designing to NFT minting. The Apton Works team of
            tech-savvy enthusiasts can craft the most impressive NFT designs.
            NFTs are the newest IT trend and are soaring in popularity around
            the globe, and we want to ensure that our NFT design services echo
            the concept and story of the NFT and compel users to use them.{" "}
          </p>
        </div>
      </div>

      <div className="hyperledger">
        <h4 className="lang-logos-header-1">Hyperledger Implementation </h4>

        <div className="container-1 row">
          <div className="first5 col">
            <h2>Hyperledger Sawtooth </h2>
            Our experts combine Hyperledger Sawtooth with a permissioned smart
            contract interpreter that was designed to provide concurrent
            transaction processing, interoperability with Ethereum contracts,
            multilingual Software Development Kits, and adaptive agreement.
          </div>
          <div className="first5 col">
            <h2>Hyperledger Fabric</h2>
            To generate distinct digital identities based on blockchains or
            other distributed ledgers for compatibility, we perform Hyperledger
            Fabric implementation.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
