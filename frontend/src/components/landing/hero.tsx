import { mobile_hero } from "../../../assets/icons/index.ts";
import "../../styles/landing/_hero.scss";

const Hero = () => {
  return (
    <div className="container">
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to <span>KOL</span>
        </h1>
        <p className="hero-description">
          The KOL Chat Application provides celebrities with a platform to interact with their audience 
          in real-time. It offers features such as automatic responses generated by an AI model and manual 
          responses. The application ensures seamless communication through Socket.IO for real-time messaging 
          and MongoDB for storing messages and responses.
        </p>
      </div>
      <aside className="hero-image">
        <img src={mobile_hero} alt="KOL LOGO" />
      </aside>
    </div>
  );
};

export default Hero;
