import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventList from './EventList';
import PriceChart from './PriceChart';

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios('http://127.0.0.1:5000/api/brent_data');
                console.log(result); // Log the full response

                // Check if the data is an array
                if (Array.isArray(result.data)) {
                    setData(result.data);
                    setEvents(result.data.map(item => item.Event)); // Adjust based on your actual data structure
                } else {
                    console.error('Data is not an array:', result.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Brent Oil Prices Dashboard</h1>
            <PriceChart data={data.map(item => ({ date: item.Date, price: item.Price }))} />
            <EventList events={events} />
        </div>
    );
};

export default Dashboard;