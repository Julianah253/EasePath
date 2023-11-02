import React from 'react'
import './about.css'

const About = () => {
  return (
    <div>
        <div className="about">
            <div className="leftdiv">
            <h2 class="spacing"> About us </h2>
            <p class="spacing"> Who we are and why we exist </p>

            </div>
            <div className="rightdiv">
                <span> Easepath International is a company built under the survey of how to solve problems <br/> and meet needs. Easepath was born from feedback gotten from issues that limit one’s dream.<br/> The company was started to serve everyone in need of POF and make it seamless with the<br/> best rates in the industry. </span>
                <br/><br/>
                <span> We at Easepath have processed over 55 POF transactions for our client within the first<br/> quarter of this year and are looking at tripling this before the end of the second quarter. We<br/> employ you to join the moving train as we embark on the journey of making POF accessible<br/> to everyone in need of it. </span>
            </div>
        </div>

        <section className='pof'>
            <div className="leftimg">
                <img src='cheerful-student-using-phone.jpg'/>
            </div>

            <div className="rightpof">
                <h2> What Is POF? </h2>
                <p> Proof of Funds (POF) is a letter or documentation that certifies that an individual, institution, or<br/> corporation has sufficient funds (money) to complete a transaction. A POF is issued by<br/> commercial banks or certified agents to provide confidence or assurance to the requesting<br/> institution – typically a seller – that the individual or entity in question has sufficient funds to<br/> complete an agreed-upon purchase. </p>
            </div>
        </section>

        <section className="reason">
            <h2 style={{color: '#1d00ff', textAlign: 'center', fontSize: '42px',  fontWeight: '800', padding: '20px'}}> Why Choose Easepath? </h2>
            <p className='spacingp' style={{fontSize: '18px', textAlign: 'center', lineHeight: '29px'}}> Easepath international is a company that is established to facilitate access to financing one's<br/> dream tailored to suit every financial need at the lowest interest rate. </p>
            
            <div className="visionandmission">
                <div className="vision" style={{textAlign: 'center'}}>
                    <h3 style={{color: '#1d00ff', fontSize: '23px'}}> Vision </h3>
                    <p style={{textAlign: 'center', fontSize: '16px'}}> To be the number go-to platform for POF before the second quarter of 2022 considering the way we<br/> have made it seamless for all parties that require this service with one of the most competitive rates<br/> in the market. </p>
                </div>

                <div className="mission" style={{textAlign: 'center'}}>
                    <h3 style={{color: '#1d00ff', fontSize: '23px'}}> Mission </h3>
                    <p style={{textAlign: 'center', fontSize: '16px'}}> To ensure that every candidate in need of POF can access it seamlessly and without stress at the<br/> most affordable rate and within the shortest time frame. </p>
                </div>
            </div>
        </section>


        <section className="works">
            <div className="overlay">
                <h1 style={{textAlign: 'center', color: '#ffffff', fontSize: '40px', paddingTop: '200px'}}> How it Works </h1>
                <p style={{textAlign: 'center', color: '#ffffff', fontSize: '20px'}}> Somethings are as easy as they seem. The process to your easy path<br/> begins with these processes. </p>
                <br/><br/><br/><br/>

                <div className="numbers" style={{display: "flex", justifyContent: "center"}}>
                    <div className="numberone">
                        <div class="circle"> 1 </div><br/>
                        <h3 style={{color: '#ffffff'}}> Register on our site </h3>
                        <p style={{color: '#ffffff'}}> Apply on the website<br/> www.easepath.com </p>
                    </div>
                    <div className="numbertwo">
                        <div class="circle"> 2 </div><br/>
                        <h3 style={{color: '#ffffff'}}> Begin your KYC </h3>
                        <p style={{color: '#ffffff'}}> Provide required documents <br/>for account opening </p>
                    </div>
                    <div className="numberthree">
                        <div class="circle"> 3 </div><br/>
                        <h3 style={{color: '#ffffff'}}> Approval Process </h3>
                        <p style={{color: '#ffffff'}}> Pay the service charge upfront </p>
                    </div>
                    <div className="numberfour">
                        <div class="circle"> 4 </div><br/>
                        <h3 style={{color: '#ffffff'}}> Get credited instantly </h3>
                        <p style={{color: '#ffffff'}}> Get the required Loan in your<br/> bank account </p>
                    </div>
                </div>
            </div>
        </section>

<br/><br/><br/>
    </div>
  )
}

export default About