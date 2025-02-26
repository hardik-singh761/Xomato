import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
        <h1 className="logo">Xomato</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            consectetur. Necessitatibus dignissimos repudiandae veniam
            asperiores nihil rem eum nemo corporis, soluta alias? Ducimus illum
            earum, modi eius sit tempora ad.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-212-762-6291</li>
            <li>contact@xomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 &copy; Xomato.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
