import React from 'react';

import Copyright from './Copyright';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Footer = () => (
  <section id="footer">
    <div className="inner">
      <h2 className="major">Get in touch</h2>
      <p>
        We'd love to hear from you!
      </p>
      <ContactForm />
      <ContactInfo />
      <Copyright />
    </div>
  </section>
);

export default Footer;
