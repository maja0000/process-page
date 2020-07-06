import React from 'react';
import './UserStories.css';

export default function UserStories() {
  return (
    <div>
      <div className="user-stories">
        <p
          className="userstories-header"
          style={{ color: '#ED8383', fontSize: '5vw' }}
        >
          user stories
        </p>

        <ol>
          <li>
            As a user I want to be able to find a cabin in selected country,
          </li>
          <li>As a user I want to see the location of the cabin,</li>
          <li>
            {' '}
            As a user I want to see cabins’s details (amount of beds, bathrooms,
            access to internet and breakfast option)
          </li>
          <li>As a user I want to see other user’s reviews</li>
          <li>As a user I want to be able to message the host</li>
          <li>
            As a user I want to add cabin to my the list of my favourites{' '}
          </li>
          <li>As a user I want to check night prise</li>
          <li>As a user I want to choose check in/out date</li>
          <li>As a user I want to book a visit</li>
        </ol>
      </div>
    </div>
  );
}
