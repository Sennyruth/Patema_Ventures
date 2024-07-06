import "./Home.css"
import { MdOutlineStar } from "react-icons/md";
import briannaImg from "../../assets/brianna.jpeg"
import { ImQuotesRight } from "react-icons/im";

function Testimonial() {
  return (
    <div>
      <div className="test-titles">
        <h1>What our customers say</h1>
      </div>
      <div className="customer-cards">
      <div className="client-container">
        <div className="stars">
        <MdOutlineStar />
     <MdOutlineStar />
     <MdOutlineStar />
     <MdOutlineStar />
     <MdOutlineStar />
     
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cum voluptatem suscipit dolor iste labore odit laborum magni, et maxime deserunt autem nihil quia est sequi alias omnis. Tempore, maxime.</p>
     <div className="client-card">
     <img src={briannaImg} alt="" />
     <p>Brianna James</p>
     </div>
     <p>Real Estate Manager</p>
     <div className="quotes">
     <ImQuotesRight />
     </div>
     

     
      </div>
      <div className="client-container">
        <div className="stars">
        <MdOutlineStar />
     <MdOutlineStar />
     <MdOutlineStar />
     <MdOutlineStar />
     <MdOutlineStar />
     
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cum voluptatem suscipit dolor iste labore odit laborum magni, et maxime deserunt autem nihil quia est sequi alias omnis. Tempore, maxime.</p>
     <div className="client-card">
     <img src={briannaImg} alt="" />
     <p>Brianna James</p>
     
     </div>
     <p>Real Estate Manager</p>
     <div className="quotes">
     <ImQuotesRight />
     </div>

     
      </div>
      <div className="client-container">
        <div className="stars">
        <MdOutlineStar />
     <MdOutlineStar />
     <MdOutlineStar />
     <MdOutlineStar />
     <MdOutlineStar />
     
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cum voluptatem suscipit dolor iste labore odit laborum magni, et maxime deserunt autem nihil quia est sequi alias omnis. Tempore, maxime.</p>
     <div className="client-card">
     <img src={briannaImg} alt="" />
     <p>Brianna James</p>
     
     </div>
     <p>Real Estate Manager</p>
     
     <div className="quotes">
     <ImQuotesRight />
     </div>

     
      </div>
      <div className="client-container">
        <div className="stars">
        <MdOutlineStar />
     <MdOutlineStar />
     <MdOutlineStar />
     <MdOutlineStar />
     <MdOutlineStar />
     
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cum voluptatem suscipit dolor iste labore odit laborum magni, et maxime deserunt autem nihil quia est sequi alias omnis. Tempore, maxime.</p>
     <div className="client-card">
     <img src={briannaImg} alt="" />
     <p>Brianna James</p>
     
     </div>
     <p>Real Estate Manager</p>
     <div className="quotes">
     <ImQuotesRight />
     </div>

     
      </div>
      </div>
      
    </div>
  );
}

export default Testimonial;
