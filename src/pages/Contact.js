import {MdOutlinePhonelinkRing,MdEmail } from 'react-icons/md';

const Contact = () => {
    return (
      <>
      <section>
        <h1>Contact Me</h1>
        <ul>
        <li>
            <a href="mailto:tsbsankara@gmail.com"><MdEmail/>dontess5@yahoo.com</a>
          </li>
          <li>
            <a href="tel:0700123456"><MdOutlinePhonelinkRing />405-371-2743</a>
          </li>
        </ul>
      </section>
      </>
    );
  }
  export default Contact;