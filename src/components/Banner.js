import React, { Component } from 'react';

const Banner = React.forwardRef(({ siteTitle }, ref) => (
  <section ref={ref} id="banner">
    <div className="inner">
      <div className="logo">
        <span className="icon fa-diamond" />
      </div>
      <h2>We are {siteTitle}</h2>
    </div>
  </section>
));

export default Banner;
