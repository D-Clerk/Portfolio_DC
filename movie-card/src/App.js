import React from 'react';
import { MovieCard } from './MovieCard';
import AppButton from './AppButton';
import { events } from './events.js';
import { EventCard } from './EventCard';

function App() {
  return (
    <div className="movie-card-group">
      {/* Movie cards block in one row */}
      <div className="movie-card-group">
        <MovieCard
          title="Casablanca"
          showTime="Sun 8 Feb - 10:00PM"
          screen="4"
          row="F"
          seat="21,21"
          imageUrl="https://resizing.flixster.com/1AihiP2VoZOgyhOx4EBb4Oyj57g=/206x305/v2/https://flxt.tmsimg.com/assets/p651_p_v13_az.jpg"
        />
        <MovieCard
          title="The Wizard of Oz"
          showTime="Thu 12 Feb - 10:00PM"
          screen="2"
          row="C"
          seat="8,9"
          imageUrl="https://resizing.flixster.com/ulqUDhVVuKGWDLeBtkp9KjyReo8=/206x305/v2/https://flxt.tmsimg.com/NowShowing/129612/129612_ab.jpg"
        />
      </div>

      {/* Events block */}
      <h1>Events</h1>
      <div className="appContainer">
        {events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            date={event.date}
            location={event.location}
            description={event.description}
          />
        ))}
      </div>

      {/* Button in next row */}
      <div style={{ marginTop: '2rem' }}>
        <AppButton />
      </div>
    </div>
  );
}

export default App;
