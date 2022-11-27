import React from 'react';

const Dropdown = ({ link, url }) => (
  <ul>
    <li>
      <a href={url}>{link}</a>
    </li>
  </ul>
);

export default Dropdown;
