import React, { useState, useEffect } from 'react'
import './navbar.css'
import './nav'
import Button from '../button/Button'

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
                            <Button/>
                        </ul>
                    </div>

                    <div className='herotext' style={{paddingTop: '15rem', marginLeft: '18rem'}}>
                      <h1 style={{fontSize: '70px', color: '#ffffff', lineHeight: '65px'}}> Need an easy access<br/>to Finance? </h1>
                      <p style={{color: '#ffffff', fontSize: '20px', fontWeight: '600', lineHeight: '70px'}}> Apply now and secure the dream </p>
                      <li className='buttons' style={{listStyle: 'none', textAlign: 'center', width: '180px', backgroundColor: '#4A33FF', padding: '15px'}}><a href='#' style={{color: 'white', textDecoration: 'none', border: '2px solid #4A33FF', color: '#FFF', fontWeight: '700'}}> Get Loan Now </a></li>
                    </div>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Navbar
