import React from 'react';
import './Refacturing.css';
import smile from '../../pics/smile1.svg';
export default function Refacturing() {
  return (
    <div>
      <div data-aos="fade-up-left" className="stack">
        {/* <div data-aos="fade-up-right" className="stats-pic"></div> */}
        <p className="bounce" style={{ color: '#ED8383', marginLeft: '10%' }}>
          like this, but nicer
        </p>
        <p className="paragraph-stack">
          This is the last one. Good time to check my app's performance. I like
          to use Profiler API to check how often my components are rendering and
          which parts of the app are too slow. Another great tool is GTmetrix
          which provides detailed performance descriptions and even some
          optimization suggestions.
          <br />
          <br />
          I'm happy to hear constructive feedback - that's why I'll ask more
          experienced developers for review or advice. When it comes to user
          experience I ask my non-developer friends to have a look and tell me
          what was good, bad or ugly.
          <br />
          <br />
          <span style={{ color: '#F3A0A0' }}>that's it folks!</span>
          <br />
          <br />
          <div
            style={{
              backgroundImage: `url(${smile})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              height: '20px',
            }}
          ></div>{' '}
        </p>
        <br />
      </div>
    </div>
  );
}
