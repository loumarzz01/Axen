
import './Navbar.css'

import Axen from '../../assets/Axen logo black.png'

export default function NavBar({scrollToSection, refs}) {

    return (
    <nav className="navbar">
        <div className="nav-logo">
            <img src={Axen}/>
            <p>Axen</p>
            
        </div>

        <div className="navbar-links">

            {/* These refs are sent */}
            <button className='ref-button' onClick={() => scrollToSection(refs.homeRef)}> 
                <p className='ref-btn-text'>Home</p>  
            </button>

            <button className='ref-button' onClick={() => scrollToSection(refs.workRef)}> <p className='ref-btn-text'>Work</p> 
            </button>

            {/* <button className='ref-button' onClick={() => scrollToSection(refs.pricingRef)}> <p className='ref-btn-text'>Pricing</p> 
            </button> 
            */}

            

        </div>

        
        
        <div className="nav-contact">
            <button className="navbar-contact-btn">Contact</button>
        </div>




        
    </nav>
    )
}