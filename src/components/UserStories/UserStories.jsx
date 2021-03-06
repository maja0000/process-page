import React from 'react';
import './UserStories.css';
import '../../App.css';

export default function UserStories() {
  return (
    <div>
      <div data-aos="fade-up-right" className="user-stories ">
        <p className="bounce" style={{ color: '#ED8383' }}>
          user stories
        </p>
        <p style={{ fontSize: '4vw', fontWeight: '100' }}>
          This is a short example set of stories that I prepared for my on-going
          project “Wypoczynek”. It’s a Airbnb younger sibling. The main goal of
          the app is to find a perfect cabin to stay in. Writing stories down
          helps me focus on the app most important functionality and prioritize
          user experience.
        </p>
        <br />
        <ol style={{ fontWeight: '200' }}>
          <li>
            As a user, I want to be able to find an available cabin in the
            country of my choice,
          </li>
          <li>As a user, I want to book a stay,</li>

          <li>As a user, I want to see the location of the cabin,</li>
          <li>
            {' '}
            As a user, I want to see cabins’ details (amount of beds, bathrooms,
            access to internet and breakfast option),
          </li>
          <li>As a user, I want to check the price per night,</li>
          <li>As a user, I want to see other user’s reviews,</li>
          <li>As a user, I want to be able to contact the host,</li>
          <li>As a user, I want to be able to change check-in/out date,</li>
          <li>As a user, I want to add cabin to the list of my favorites</li>
        </ol>
      </div>
    </div>
  );
}
