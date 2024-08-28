import React, { useRef } from 'react'
import './Join.css';
import emailjs from '@emailjs/browser';
const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
          .sendForm('service_mlqlg7y', 'template_btzybtz', form.current, {
            publicKey: 'maWH1Y39j4pBXGdF0',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <div className="Join" id="join-us">
        <div className="left-j">
            <div>
                <hr />
                <span className='stroke-text'>Ready to</span>
                <span> Level up</span>
            </div>
            <div>
                <span>your body </span>
                <span className='stroke-text'> with us?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name="user_email" placeholder='Enter your e-mail address' />
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join;