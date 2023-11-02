import React from 'react'
import './form.css'

const Form = () => {
    return (
        <div className='headingandform'>
            <section className="form">
                <h1> Get proof of funds of up to ₦10 million </h1>
                <p> Fill all fields and let's get you on your way as soon as possible </p>
            </section>

            <div>
                <form>
                    <label for="fname">Full Name*</label><br />
                    <input type="text" id="fname" name="fullname" placeholder="Your name.." /><br />

                    {/* formlayout 1 */}
                    <div className="formlayout1label">
                        <label for="email">Email*</label><br />
                        <label for="phone">Phone Number*</label><br />
                    </div>
                    <div className="formlayout1" style={{ display: 'flex', gap: '5px' }}>
                        <input type="text" id="email" name="email" placeholder="Your email.." /><br />
                        <input type="text" id="phone" name="phone" placeholder="Your phone number.." /><br />
                    </div>

                    {/* formlayout 2 */}
                    <div className="formlayout2label">
                        <label for="state">State*</label><br />
                        <label for="purpose">Purpose of Loan*</label><br />
                    </div>
                    <div className="formlayout2" style={{ display: 'flex', gap: '5px' }}>
                        <select>
                            <option> Abuja </option>
                            <option> Abia </option>
                            <option> Adamawa </option>
                            <option> Akwa-Ibom </option>
                            <option> Anambra </option>
                            <option> Bauchi </option>
                            <option> Bayelsa </option>
                            <option> Benue </option>
                            <option> Borno </option>
                            <option> Cross River </option>
                            <option> Delta </option>
                            <option> Ebonyi </option>
                            <option> Edo </option>
                            <option> Ekiti </option>
                            <option> Enugu </option>
                            <option> Gombe </option>
                            <option> Imo </option>
                            <option> Jigawa </option>
                            <option> Kaduna </option>
                            <option> Kano </option>
                            <option> Katsina </option>
                            <option> Kebbi </option>
                            <option> Kogi </option>
                            <option> Kwara </option>
                            <option> Lagos </option>
                            <option> Nassarawa </option>
                            <option> Niger </option>
                            <option> Ogun </option>
                            <option> Ondo </option>
                            <option> Osun </option>
                            <option> Oyo </option>
                            <option> Plateau </option>
                            <option> Rivers </option>
                            <option> Sokoto </option>
                            <option> Taraba </option>
                            <option> Yobe </option>
                            <option> Zamfara </option>
                        </select>
                        <select>
                            <option> Proof of funds </option>
                        </select>
                    </div>

                    {/* formlayout 3 */}
                    <div className="formlayout3label">
                        <label for="duration">Duration*</label><br />
                        <label for="amount">Amount*</label><br />
                    </div>
                    <div className="formlayout3" style={{ display: 'flex', gap: '5px' }}>
                        <select>
                            <option> 1 Month </option>
                            <option> 2 Months </option>
                            <option> 3 Months </option>
                            <option> 4 Months </option>
                            <option> 5 Months </option>
                            <option> 6 Months </option>
                            <option> Other </option>
                        </select>
                        <input type="text" id="amount" name="amount" placeholder="Loan amount.." /><br />
                    </div>

                    <input type="submit" value="Submit" style={{ fontSize: '20px' }} />
                </form>
            </div>
            <br /><br /><br /><br />
            <section className="howitworks">
                <h1> See how it works </h1>
                <span style={{ fontSize: '20px', textAlign: 'center', wordSpacing: '2px' }}> Use the loan calculator to get started </span>
            </section>
            <br /><br /><br /><br />
        </div>
    )
}

export default Form