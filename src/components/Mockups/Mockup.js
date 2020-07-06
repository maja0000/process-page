import React from 'react';
import './Mockup.css';
import '../../App.css';

export default function Mockup() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <p
          className="bounce"
          style={{ color: '#ED8383', fontSize: '5vw', marginLeft: '10%' }}
        >
          mockups
        </p>
        <p style={{ width: '80%', marginLeft: '60px' }}>
          Plain text, Plain-text, or Plaintext is any text, text file, or
          docucumcument that contains only text. Unlike a rich-text document, a
          plain text file cannot have bold text, fonts, larger font sizes, or
          any other special text fhat contains only text. Unlike a rich-text
          document, a plain text file cannot have bold text, fonts, larger font
          sizes, or any other special er special text file cannot have bold
          text, fonts, larger font sizes, or any other special text formatting.
          In the picture is a visual example of plain text vs.Oct 17, 2017
        </p>
        <div className="mockup3"></div>
        <div className="mockup1"></div>
      </div>
    </>
  );
}
