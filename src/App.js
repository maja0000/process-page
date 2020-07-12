import React from 'react';
import Mockup from './components/Mockups/Mockup';
import TechStack from './components/TechStack/TechStack';
import AOS from 'aos';
import UserStories from './components/UserStories/UserStories';
import Coding from './components/Coding/Coding';
import Refacturing from './components/Refacturing/Refacturing';
import './App.css';
AOS.init();

function App() {
  return (
    <div className="App">
      <div className="header">this is how i work</div>

      <div className="content">
        <a
          href="https://maja-gach-portfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="logo"></div>
        </a>
        <a
          href="https://twitter.com/maja_gch"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="twitter-logo"></div>{' '}
        </a>
        <div className="all-boxes bounce">
          <div className="content-box">
            <span className="number">1</span>
            <p style={{ fontWeight: '100', fontSize: '1.5em' }}>
              <span style={{ color: '#ED8383', fontSize: '2em' }}>
                Write user stories.
              </span>{' '}
              To make sure that I know exactly what is my applications purpose
              and what features I want users to be able to access. I write down
              short descriptions told from their perspective. <br />
              <br />
            </p>
          </div>
          <div className="content-box">
            <span className="number">2</span>
            <p style={{ fontWeight: '100', fontSize: '1.5em' }}>
              {' '}
              <span style={{ color: '#ED8383', fontSize: '2em' }}>
                Wireframe and mockup.
              </span>{' '}
              Before starting to code I prepare rough sketch of the user
              interface on a piece of paper. Afterwards using Figma I add
              details, collect icons, pictures, fonts and color palettes I’ll be
              using in the project. <br />
            </p>
          </div>
          <div className="content-box">
            <span className="number">3</span>
            <p style={{ fontWeight: '100', fontSize: '1.5em' }}>
              {' '}
              <span style={{ color: '#ED8383', fontSize: '2em' }}>
                App architecture and tech stack.{' '}
              </span>
              Finally I have to think about the structure of the aplication and
              answer following questions. Is my application connected to the
              database? How will I be storing the data, what state managment
              method is best for this particular app ? What styling method will
              be the best? What libraries and packages will I need?
              <br />
            </p>
          </div>
          <div className="content-box">
            <span className="number">4</span>
            <p style={{ fontWeight: '100', fontSize: '1.5em' }}>
              {' '}
              <span style={{ color: '#ED8383', fontSize: '2em' }}>
                Sprint planning.{' '}
              </span>{' '}
              If I’m working on my own I won’t be following the SCRUM
              methodology as closely as in a team. Despite that I’ll definately
              split task in smaller sprints and estimate how long will they take
              depending on the dificulty and complexity of the tasks. I'll set
              up deadline for each of them and try to keep the schedule as
              efficiently as possible. <br />
            </p>
          </div>
          <div className="content-box">
            <span className="number">5</span>
            <p style={{ fontWeight: '100', fontSize: '1.5em' }}>
              {' '}
              <span style={{ color: '#ED8383', fontSize: '2em' }}>
                Code, code, code!{' '}
              </span>{' '}
              This one is self-explanatory. <br />
              <a href="#code">Read more </a>
              <br />
            </p>
          </div>
          <div className="content-box">
            <span className="number">6</span>
            <p style={{ fontWeight: '100', fontSize: '1.5em' }}>
              {' '}
              <span style={{ color: '#ED8383', fontSize: '2em' }}>
                All done? Now make it better!
              </span>{' '}
              Everything is working ? Cool! Now it's time to refacture. I try to
              make everything shorter and more <em>elegant</em> . If components
              ended up being too long, I'll break them down. Maybe some
              functions deserve a seperate file? Maybe it would be better to
              make a hook out of them and import in different places in my app?
              Final touches!
              <br />
            </p>
          </div>
        </div>
        <UserStories />
        <Mockup />
        <TechStack />
        <Coding />
        <Refacturing />
      </div>
    </div>
  );
}

export default App;
