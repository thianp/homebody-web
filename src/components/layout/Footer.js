import logo from "../../assets/images/logo.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import linkedin from "../../assets/images/linkedin.png";

function Footer() {
  return (
    <>
      {/* ----- Footer ----- */}
      <footer>
        <div className="footer">
        <div className="geometric-pattern footer p-0">
          <div></div>
          <div className="white"></div>
          <div></div>
          <div className="white"></div>
          <div className="white"></div>
          <div></div>
          <div className="white"></div>
          <div></div>
        </div>
          <div className="logo d-flex">
            <img src={logo}></img>
          </div>
          <p className="desc-text">
            646 Phayathai rd., <br />
            Ratchatewi district <br />
            Bangkok 10400 <br />
            <br />
            Tel 02-333-3333
          </p>
          <div className="socmed-icons">
            <a href="#">
              <img src={facebook}></img>
            </a>
            <a href="#">
              <img src={twitter}></img>
            </a>
            <a href="#">
              <img src={linkedin}></img>
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <p className="desc-text">Copyright © 2022 Homebody</p>
        </div>
      </footer>
    </>
  );
}
 export default Footer;