import React from 'react';

export const EventCard = ({ title, date, location, description }) => {
	return (
		<div className="eventCard">
			{/* Todo: Replace the `props.title` with the destructured `title` attribute*/}
			<div className="title">{title}</div>

			<div className="dateLocation">
				{/* Todo: Replace the `props.date` with the destructured `date` attribute*/}
				{date}{' '}|{' '}{location}
				{/* Todo: Replace the `props.location` with the destructured `location` attribute*/}
			</div>
			<div className="description">
				{/* Todo: Replace the `props.description` with the destructured `description` attribute*/}
				{description}
			</div>
		</div>
	);
};

