import React, {Fragment, useState, useEffect, Linking} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import {Button} from './Button'
import logo from '../images/MainLogo.png'
import logo3 from '../images/Logo3.png'
import WhitePinkPhone from '../images/icons-old/WhitePinkPhone.png'
import Dropdown from './Dropdown';

function Navbar() {

    // mobile section
    const [click,setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false) // when menu option selected, get rid of side bar. 
    const [button, setButton] = useState(true)

    const [dropdown, setDropdown] = useState(false);
    
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

      const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const extendElement = () => {
  dropdown ? setDropdown(false) : setDropdown(true);
}

    // const services = 'Services '
    
    // whenever the screen size changes, check for the code
    window.addEventListener('resize',showButton)

    return (
        <>
        <nav className="navbar">
           
                
                <Link className = 'Nav-Logo' to ='/'>
                     <img src={logo3} className ='Just2ConnectLogo' alt="Just2ConnectLogo" to='/' onClick={closeMobileMenu}/>
                </Link>
                

                {/* Mobile Menu Section  */}
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    
                    <li className='nav-item'>
                        <Link to="/TelephoneSystems" className='nav-links' onClick={closeMobileMenu}>
                           <p className = 'navText' >Telephone Systems, VoIP</p> 
                        </Link>
                    </li>

                     <li className='nav-item'>
                        <Link to="/Broadband" className='nav-links' onClick={closeMobileMenu}>
                           <p className = 'navText' >Broadband</p> 
                        </Link>
                    </li>





                     <li
                        className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                      >
                        <Link
                        className='nav-links'
                        onClick={extendElement}
                        >
                        All Services <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown 
                        onCloseMobileMenu={closeMobileMenu}/>}
                     </li>







                    <li className='nav-item'>
                        <Link to="/About" className='nav-links' onClick={closeMobileMenu}>
                           <p className = 'navText'>About</p> 
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to="/Contact" className='nav-links' onClick={closeMobileMenu}>
                           <p className = 'navText'> Contact</p> 
                        </Link>
                    </li>


                    <li className='nav-item-blank'>
                        <Link to="/Contact" className='nav-links-mobile' onClick={console.log('need to sort this out')} >
                            01442 573030
                        </Link>
                    </li>
                </ul>
                <div className='buttonHolder'>
                                    {button && <Button buttonStyle = 'btn--outline' > <img src={WhitePinkPhone} alt="" className='CTAPhone'/>
                 <p className='CTAText'>01442 573030 </p> </Button>}
                </div>
                {/* {button && <Button buttonStyle = 'btn--outline' > <img src={WhitePinkPhone} alt="" className='CTAPhone'/>
                 <p className='CTAText'>01442 573030 </p> </Button>} */}
        </nav>
        </>
    )
}

export default Navbar





