import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer">
          <div className="top">
            <div className="one">
              <div className="icon"> <i class="fa-solid fa-phone-flip"></i> </div>
              <div className="text"> <p> Phone <br/> 0809 284 9031</p></div>
            </div>
            <div className="one">
               <div className="icon"> <i class="fa-regular fa-envelope"></i> </div> 
               <div className="text"> Email <br/> info@easepath.com </div>
            </div>
            <div className="one">
              <div className="icon"> <i class="fas fa-book-reader"></i> </div>
              <div className="text"> Opening hours<br/> Monday - Friday: 09:00 - 18:000 </div>
            </div>
          </div>
          <div className="bottom">
            <p> Copyright 2022. Easepath International </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer