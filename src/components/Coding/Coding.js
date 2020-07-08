import React from 'react';
import './Coding.css';

export default function Coding() {
  return (
    <div>
      <div data-aos="fade-up-right" className="stack">
        <p className="bounce" style={{ color: '#ED8383', marginLeft: '10%' }}>
          it's go time
        </p>
        <p className="paragraph-stack">
          Actually now is the real deal ! My goal is to write clean, readable
          and scalable code. To achieve it, I try to follow couple of rules. I'm
          keeping pieces of logic separated by topic/goal. Most often it’s a
          function that has one job to do or component that should only have one
          purpose. Trying to do multiple things at once is a bad idea, causing
          side effects. <br />
          Another one is destructuring - especially when I handle data from API,
          it’s a nice way to decrease complexity and handle only specifics that
          I can assign to a variable and use in my logic.
          <br />
          <br />
          Some of the functions deserve a separate file, instead of writing the
          same code over and over again I like to (for example) create a hook
          and re-use them in different parts of my app.
          <br /> <br /> Biiig fan of the KISS principle - 'keep it simple,
          stupid' or even better{' '}
          <span style={{ color: '#F3A0A0' }}>'keep it stupid simple'</span>.
        </p>
        <br />
      </div>
    </div>
  );
}
