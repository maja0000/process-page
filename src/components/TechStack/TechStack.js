import React from 'react';
import './TechStack.css';
import '../../App.css';

export default function TechStack() {
  return (
    <>
      <div data-aos="fade-up-left" className="stack">
        <p className="bounce" style={{ color: '#ED8383', marginLeft: '10%' }}>
          tech stack
        </p>
        <p className="paragraph-stack">
          Now the real deal! First, I need to think about the technologies I’ll
          be using. If the application requires collecting data from the user or
          receiving a response from the database - I’ll use the MERN stack. If
          not, but the page is complex enough I’ll just use React. Knowing
          already what functionality my app is gonna have, it’s time for quick
          research about libraries and packages I can re-use. If I'm working on
          my own I'll only use functional components with hooks.
          <span style={{ color: '#F3A0A0' }}>Keeping it simple!</span>
        </p>
        <br />
        <div data-aos="fade-up-right" className="folders"></div>
        <p data-aos="fade-up-left" className="paragraph-stack">
          Now is a good time to think about folder structure and state
          management. Is that gonna be a component? can I break it down in
          smaller pieces? can I re-use it ?<br />
          <span style={{ color: '#F3A0A0', fontSize: '2.8vw' }}>
            I like things to be tidy!{' '}
          </span>
          So I try to keep file and component names very simple and logical. If
          it’s a small app I pay a lot attention to parent-child-grandchild
          relationships. If it’s bit bigger - I need to decide - is it better to
          use Redux or Context API? Maybe something else? It's important to know
          it before I start to code.
          <br /> <br />
          <span style={{ color: '#F3A0A0', fontSize: '2.8vw' }}>
            I've learned this one the hard way (ㆆ^ㆆ)
          </span>
        </p>
      </div>
    </>
  );
}
