// src/App.js
import React, { useState } from 'react';
import './App.css';
import UserProfile from './components/UserProfile';
import RestaurantSearch from './components/RestaurantSearch';
import EventCalendar from './components/EventCalendar';

function App() {
  const [userPreferences, setUserPreferences] = useState({});
  const [userRequirements, setUserRequirements] = useState({});
  const [selectedLocation, setSelectedLocation] = useState('');
  const [events, setEvents] = useState([]);

  return (
    <div className="App">
      <h1>EatTogether App</h1>
      <UserProfile
        userPreferences={userPreferences}
        setUserPreferences={setUserPreferences}
        userRequirements={userRequirements}
        setUserRequirements={setUserRequirements}
      />
      <RestaurantSearch
        userPreferences={userPreferences}
        userRequirements={userRequirements}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        events={events}
      />
      <EventCalendar events={events} setEvents={setEvents} />
    </div>
  );
}

export default App;
