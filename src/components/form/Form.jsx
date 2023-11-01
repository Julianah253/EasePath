import React from 'react'
import './form.css'
const Form = () => {
  return (
    <div>
         <section className="form">
            <h1 style={{color: '#1d00ff', fontSize: '42px', textAlign: 'center', fontWeight: '900'}}> Get proof of funds of up to ₦10 million </h1>
            <p style={{color: '#000', fontSize: '20px', textAlign: 'center'}}> Fill all fields and let's get you on your way as soon as possible </p>
         </section>
         
         <div>
         <form style={{padding: '0rem 20rem 0rem 20rem'}}>
            <label for="fname">Full Name*</label><br/>
            <input type="text" id="fname" name="fullname" placeholder="Your name.."/><br/>
            
            {/* formlayout 1 */}
            <div className="formlayout1label" style={{display: 'flex', gap: '300px'}}>
                <label for="email">Email*</label><br/>
                <label for="phone">Phone Number*</label><br/>
            </div>
            <div className="formlayout1" style={{display:'flex', gap: '5px'}}>
                <input type="text" id="email" name="email" placeholder="Your email.."/><br/>
                <input type="text" id="phone" name="phone" placeholder="Your phone number.."/><br/>
            </div>

            {/* formlayout 2 */}
            <div className="formlayout2label" style={{display: 'flex', gap: '300px'}}>
                <label for="state">State*</label><br/>
                <label for="purpose">Purpose of Loan*</label><br/>
            </div>
            <div className="formlayout2" style={{display:'flex', gap: '5px'}}>
                {/* <input type="text" id="state" name="state" placeholder="Your state.."/><br/> */}
                <select>
                    <option> Abuja </option>
                    <option> Abia </option>
                    <option> Adamawa </option>
                    <option> Akwa-Ibom </option>
                    <option> Abuja </option>
                    <option> Abuja </option>
                    <option> Abuja </option>
                    <option> Abuja </option>
                    <option> Abuja </option>
                </select>
                <select>
                    <option> Proof of funds </option>
                </select>
            </div>

            {/* formlayout 3 */}
            <div className="formlayout3label">
                <label for="duration">Duration*</label><br/>
                <label for="amount">Amount*</label><br/>
            </div>
            <div className="formlayout3" style={{display:'flex', gap: '5px'}}>
                <select>
                    <option> 1 Month </option>
                    <option> 2 Months </option>
                    <option> 3 Months </option>
                    <option> 4 Months </option>
                    <option> 5 Months </option>
                    <option> 6 Months </option>
                    <option> Other </option>
                </select>
                <input type="text" id="amount" name="amount" placeholder="Loan amount.."/><br/>
            </div>

            <input type="submit" value="Submit" style={{fontSize: '20px'}}/>
         </form>
         </div>
         <br/><br/><br/><br/>
         <section className="howitworks" style={{width: '100%', backgroundColor: '#f5f1f1', height: '400px'}}>
            <h1 style={{color: '#1d00ff', fontSize: '42px', textAlign: 'center', fontWeight: '900', display: 'grid', alignItems:'center', alignContent:'center', justifyItems: 'center', justifyContent: 'center'}}> See how it works </h1>
         </section>
    </div>
  )
}

export default Form