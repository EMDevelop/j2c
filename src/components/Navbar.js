import React, {Fragment, useState, useEffect, Linking} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import {Button} from './Button'
import logo from '../images/MainLogo.png'

function Navbar() {

    // mobile section
    const [click,setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false) // when menu option selected, get rid of side bar. 
    const [button, setButton] = useState(true)
    
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton (false)
        } else {
            setButton(true)
        }
    }

    useEffect(()=> {
        showButton();
    },[])
    
    // whenever the screen size changes, check for the code
    window.addEventListener('resize',showButton)

    return (
        <>
        <nav className="navbar">
            <div className = "navbar-container">
                
                <Link className = 'Nav-Logo' to ='/'>
                     <img src={logo} alt="Just2Connect Logo" to='/' onClick={closeMobileMenu}/>
                </Link>
                

                {/* Mobile Menu Section  */}
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to="/About" className='nav-links' onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    
                    <li className='nav-item'>
                        <div class="dropdown">
                            <button class="dropbtn">Dropdown
                            <i class="fa fa-caret-down"></i>
                            </button>
                            <div class="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                            </div>
                        </div>
                    </li>

                    <li className='nav-item'>
                        <Link to="/About" className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/About" className='nav-links' onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/Contact" className='nav-links-mobile' onClick={console.log('need to sort this out')} >
                            01442 573030
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle = 'btn--outline' > 01442 573030 </Button>}

            </div>
        </nav>
        </>
    )
}

export default Navbar








// notes
// 




////////////////////////////////////////////////
//Changing classname when you when you click on it
////////////////////////////////////////////////


//    const [click,setClick] = useState(false)
//    const handleClick = () => setClick(!click)
// <div className="menu-icon" onClick={handleClick}>
//     <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
// </div>



// First you have to set the state to not clicked
// then set a function to change the value to the opposide !click, when clicked on the OnClick methond inline. 
// when you click, the first is the true, the second is the false


////////////////////////////////////////////////
// 
////////////////////////////////////////////////

// <ul className={click ? 'nav-menu active' : 'nav-menu'}></ul>

// 