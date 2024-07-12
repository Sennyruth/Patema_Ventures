import "./Home.css"
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  function handleNavigation() {
  navigate("/sign up");
  }
  
  return (
    <div>
      <section className="hero">
        <div className="hero-container">
            <h1 className="hero-title">Beautiful Heights</h1>
            <p className="hero-description">Building Dreams,One Brick at a Time! </p>
                <button type="submit" onClick={handleNavigation}>Get Started</button>
        </div>
      </section>
    </div>
  )
}

export default Hero
