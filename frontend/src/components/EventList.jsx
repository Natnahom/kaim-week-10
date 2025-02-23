import React from 'react';

const EventList = ({ events }) => {
    return (
        <div>
            <h3>Key Events</h3>
            <ul>
                {events.map((event, index) => (
                    <li key={index}>{event}</li>
                ))}
            </ul>
        </div>
    );
};

export default EventList;