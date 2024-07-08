import "./Services.css";
import { FaRulerCombined } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();
  function handleNavigation() {
  navigate("/contacts");
  }

  return (
    <div className="service-hero">
      <div className="service-hero-text">
        <p>
          Our expertise spans across various sectors, ensuring that every
          project is executed with the highest standards of quality and
          professionalism.
        </p>
      </div>
      <div className="services">
        <h1>Our Services</h1>
      </div>
      <div className="service-cards">
        <div className="services-items">
          <div className="icon-container">
            <FaRulerCombined />
          </div>

          <h2>Demolitions</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            architecto temporibus cupiditate tempore maiores repellat quibusdam
            error minus suscipit dolores.
          </p>
          <button type="button" onClick={handleNavigation}>
            Book Now
          </button>
        </div>
        <div className="services-items">
          <div className="icon-container">
            <FaRulerCombined />
          </div>

          <h2>Architectural Design</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            architecto temporibus cupiditate tempore maiores repellat quibusdam
            error minus suscipit dolores.
          </p>
          <button type="button" onClick={handleNavigation}>Book Now</button>
        </div>
        <div className="services-items">
          <div className="icon-container">
            <FaRulerCombined />
          </div>

          <h2>General Contracting</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            architecto temporibus cupiditate tempore maiores repellat quibusdam
            error minus suscipit dolores.
          </p>
          <button type="button" onClick={handleNavigation}>Book Now</button>
        </div>
        <div className="services-items">
          <div className="icon-container">
            <FaRulerCombined />
          </div>

          <h2>Exterior Design</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            architecto temporibus cupiditate tempore maiores repellat quibusdam
            error minus suscipit dolores.
          </p>
          <button type="button" onClick={handleNavigation}>Book Now</button>
        </div>
        <div className="services-items">
          <div className="icon-container">
            <FaRulerCombined />
          </div>

          <h2>Building Construction</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            architecto temporibus cupiditate tempore maiores repellat quibusdam
            error minus suscipit dolores.
          </p>
          <button type="button" onClick={handleNavigation}>Book Now</button>
        </div>
        <div className="services-items">
          <div className="icon-container">
            <FaRulerCombined />
          </div>

          <h2>Road Construction</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            architecto temporibus cupiditate tempore maiores repellat quibusdam
            error minus suscipit dolores.
          </p>
          <button type="button"onClick={handleNavigation}>Book Now</button>
        </div>
        <div className="services-items">
          <div className="icon-container">
            <FaRulerCombined />
          </div>

          <h2>Rennovations</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            architecto temporibus cupiditate tempore maiores repellat quibusdam
            error minus suscipit dolores.
          </p>
          <button type="button" onClick={handleNavigation}>Book Now</button>
        </div>
        <div className="services-items">
          <div className="icon-container">
            <FaRulerCombined />
          </div>

          <h2>Interior Design</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            architecto temporibus cupiditate tempore maiores repellat quibusdam
            error minus suscipit dolores.
          </p>
          <button type="button" onClick={handleNavigation}>Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default Services;
