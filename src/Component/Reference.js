import React from 'react'
import "../Component/Reference.css"

function Reference() {
    const email = 'masksymwsd@gmail.com'
    const subject = 'Subject of the email';
    const body = 'Body of the email';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <div className='Reference'>
          <h2>Reference</h2>
          <hr className='ReferenceLine' />
          <div className='PersonelInfo'>
              <div className='NameBlockReference'>
                  <p>Maks Trukhan</p>
                  <span className='underText'>Front-End Developer</span>
              </div>
              <div className='conection'>
                  <p>Phone: <a href='tel:312 647 0146'>312 647 0146</a></p>
                  <p>Email: <a href={ mailtoLink }>makstrukhan8@gmail.com</a> </p>
              </div>
          </div>
    </div>
  )
}

export default Reference
