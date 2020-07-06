import React from 'react';
import Mockup from './components/Mockups/Mockup';
import TechStack from './components/TechStack/TechStack';

import UserStories from './components/UserStories/UserStories';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">this is how i work</div>
      <div className="content">
        <div className="all-boxes bounce">
          <div className="content-box">
            <span className="number">1</span>
            <p>
              <span style={{ color: '#ED8383', fontSize: '4vw' }}>
                User stories.
              </span>{' '}
              To make sure that I know exactly what is my applications purpose
              and what features I want users to be able to access. I write down
              short descriptions told from their perspective.
              <br />
            </p>
          </div>
          <div className="content-box">
            <span className="number">2</span>
            <p>
              <span style={{ color: '#ED8383', fontSize: '4vw' }}>
                Wireframe and mockup.
              </span>{' '}
              Before starting to code I prepare rough sketch of the user
              interface on a piece of paper. Afterwards using Figma I add
              details, collect icons, pictures, fonts and color palettes I’ll be
              using in the project. <br />
              <span style={{ color: '#ED8383', fontSize: '4vw' }}></span>{' '}
            </p>
          </div>
          <div className="content-box">
            <span className="number">3</span>
            <p>
              <span style={{ color: '#ED8383', fontSize: '4vw' }}>
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
            <p>
              <span style={{ color: '#ED8383', fontSize: '4vw' }}>
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
        </div>
        <UserStories />
        <Mockup />
        <TechStack />
      </div>
    </div>
  );
}

export default App;
