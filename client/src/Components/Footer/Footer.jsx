import "./Footer.css"
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
       <div className="footer">
        <div className="social-media">
        <FaSquareInstagram />
        <FaSquareXTwitter />
        <FaSquareWhatsapp />
        <FaSquareFacebook />

        </div>
        <p>&copy; All rights reserved@Ruth Mutisya2024</p>
      
    </div>
    </footer>
   
  )
}

export default Footer
