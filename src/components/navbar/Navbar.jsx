import React, { useState, useEffect } from 'react'
import './navbar.css'
import './nav'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div>
        <div className='nav'>
            <nav>
                <div className={`overlayy ${scrolled ? 'scrolled' : ''}`}>
                    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                        <div className="navbar_logo">
                            {scrolled ? <img src='purpleeasepath.png'/> : <img src='easepathlogo.png'/>}
                        </div>

                        <ul className={`navbar_links ${scrolled ? 'scrolled' : ''}`}>
                            <li><a href='#'> Why Easepath </a></li>
                            <li><a href='#'> How it works </a></li>
                            <li><a href='#'> Loan Calculator </a></li>
                            <li><a href='#'> FAQ </a></li>
                            <li className='button'><a href='#' style={{color: 'white'}}> Get Loan Now </a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Navbar
