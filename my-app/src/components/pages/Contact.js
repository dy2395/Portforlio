import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact Info</h1>
      <ul>
          {/* Render each member from the `group` array */}
          <li>Email: dy2395@columbia.edu</li>
          <li>Github: <a href="https://github.com/dy2395"> dy2395 </a></li>
      </ul>
    </div>
  );
}
