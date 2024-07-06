import apartmentsImg from "../../assets/apartments.jpeg";
import completeImg from "../../assets/complete.jpeg"
import "./Home.css";
function About() {
  return (
    <div>
      <div className="about-title">
        <h1>About Us</h1>
      </div>
      <div className="containers">
      <div className="about-container1">
        <h2>Our Mission</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          ratione blanditiis nulla debitis quisquam iusto excepturi accusantium
          amet tempore nihil odit, minima fuga perferendis esse. Quos recusandae
          voluptatibus perspiciatis eos dolor nulla quod quam, tempore sed
          quidem, vitae eveniet enim.
        </p>
        <img src={apartmentsImg} alt="" />
      </div>
      <div className="about-container2">
        <img src={completeImg} alt="" />
        <h2>Our Vision</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          ratione blanditiis nulla debitis quisquam iusto excepturi accusantium
          amet tempore nihil odit, minima fuga perferendis esse. Quos recusandae
          voluptatibus perspiciatis eos dolor nulla quod quam, tempore sed
          quidem, vitae eveniet enim.</p>

      </div>
      </div>
      
    </div>
  );
}

export default About;
