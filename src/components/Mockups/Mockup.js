import React from 'react';
import './Mockup.css';
import '../../App.css';

export default function Mockup() {
  return (
    <>
      <div
        data-aos="fade-up-left"
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <p className="bounce" style={{ color: '#ED8383', marginLeft: '10%' }}>
          mockups
        </p>
        <p className="paragraph-mockup">
          If I don’t have the luxury of working with a designer I have to plan
          out how the user interface will look like. Starting with a rough
          sketch, usually on a piece of paper. First the most important elements
          on the page - main components like the menu, headers, buttons, text
          blocks, etc . It looks something like that:
        </p>
        <div className="wireframes" data-aos="fade-up-right">
          <div className="wireframe"></div>
          <div className="wireframe2"></div>
        </div>
        <p className="paragraph-mockup right">
          {' '}
          Now onto one of my favorite steps! Making things pretty! At this
          point, I usually get an extra kick of motivation, when UI starts to
          look as I imagined and the idea becomes reality. For my mockups, I use
          Figma or Illustrator, before starting to code I need to have a clear
          picture of what I’m about to build. I try to collect everything that I
          need. Color palettes, icons, font styles, pictures, etc. I also think
          about the movement I wanna add, what animations would make UX more
          smooth and more enjoyable. If I feel extra fancy I'll make my own
          icons and pictures. In the end I'll ask a friend for their first
          impressions or/and feedback.
        </p>
        <p className="paragraph-mockup">
          {' '}
          This is what rough wireframes turned into. <br /> <br />
          <span style={{ color: '#F3A0A0', fontSize: '2.8vw' }}>
            Things are starting to look pretty good!
          </span>
        </p>
        <div data-aos="fade-up-left" className="mockup1"></div>
        <p className="paragraph-mockup">
          {' '}
          And here’s another example, this one I made for my weather app. To
          make my own life extra easy I like to add short descriptions.
        </p>
        <div data-aos="fade-up-right" className="mockup3"></div>
      </div>
    </>
  );
}
