import "./Header.css"
import { Link } from "react-router-dom"

function Header() {
  return (
    <div>
      <header className="header-section">
        <div className="title">
            <h1>Patema Ventures</h1>

        </div>
        <div className="navigation">
            <nav className="navlist">
            <ul className="list-container">
                <li className="navigationlist-items"><Link to="/">Home</Link></li>
                <li className="navigationlist-items"><Link to="/services">Services</Link></li>
                <li className="navigationlist-items"><Link to="/projects">Projects</Link></li>
                <li className="navigationlist-items"><Link to="/contacts">Contacts</Link></li>
                <li className="navigationlist-items"><Link to="/sign up">Sign Up</Link></li>
                <li className="navigationlist-items"><Link to="/sign in">Sign In</Link></li>

            </ul>
            </nav>
            
        </div>
      </header>
      </div>
    
  )
}

export default Header
