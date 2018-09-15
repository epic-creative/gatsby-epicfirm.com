import React from 'react';

const Copyright = ({ children }) => (
  <ul className="copyright">
    <li>&copy; {new Date().getFullYear()} Epic Creative, Inc. All rights reserved.</li>
  </ul>
);

export default Copyright;
