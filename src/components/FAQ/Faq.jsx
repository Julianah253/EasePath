import React, { useState } from 'react';
import './faq.css'

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const questionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 25px 98px 0 rgba(0,0,0,0.1)',
    borderRadius: '10px',
    backgroundColor: '#FEFEFE',
    padding: '30px',
    margin: '10px 0',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '20px', // Adjust as needed
    fontWeight: 'bold', // Makes the text bold
    color: '#1d00ff', // Sets the text color to #1d00ff
    width: '800px'
  };

  const answerStyle = {
    maxHeight: isOpen ? '100vh' : '0',
    // overflow: 'hidden',
    transition: 'maxHeight 0.5s ease-in-out',
    backgroundColor: '#fff',
    padding: isOpen ? '10px' : '0',
    borderRadius: '10px',
    fontSize: '18px' // Adjust as needed
  };

  return (
    <div>
      <div style={questionStyle} onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div style={answerStyle}>{answer}</div>}
    </div>
  );
};

const Faq = () => {
  const faqs = [
    {
      question: '1. Where do I start?',
      answer: (
        <ul style={{listStyleType: 'disc'}}>
          <li> Register </li>
          <li> Create an account </li>
          <li> Get Funded </li>
        </ul>
      ),
    },
    {
      question: '2. How much am I entitled to?',
      answer: 'Up to 10 Million naira and More.',
    },
    {
      question: '3. What is the interest rate?',
      answer: 'Interest at 4% Monthly',   
    },
    {
      question: '4. When do I pay the interest?',
      answer: 'The interest is paid to initiate funding',   
    },
    {
      question: '5. Can I refer someone?',
      answer: 'Yes, you can and get a commission.',   
    },
    {
      question: '6. Do I need collatera?',
      answer: `You don't need collateral for this`,   
    },
    {
      question: '7. What countries does your company cover?',
      answer: 'We are currently operating within Nigeria for now',   
    }
  ];

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    margin: '0 auto'
    
  };

  return (
    <div className="faq" style={containerStyle}>
      <section className="FAQ">
        <h1 style={{textAlign: 'center', fontSize: '42px', color: '#1d00ff'}}> Find answers and general<br/> information </h1>
        <p> A list of frequently asked questions to help you understand how it works. </p>
        {faqs.map((faq, i) => (
          <FAQ key={i} question={faq.question} answer={faq.answer} />
        ))}
      </section>
    </div>
  );
};

export default Faq;
