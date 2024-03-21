import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay';

const App = () => {
  // Initialize weather state with default values
  const [weather, setWeather] = useState({ temperature: 0, conditions: '' });

  // Simulating fetching weather data with useEffect
  useEffect(() => {
    // Here you can fetch real weather data from an API
    // For now, we'll use the provided weather input
    const fetchedWeather = { temperature: 25, conditions: "Sunny" };
    setWeather(fetchedWeather);
  }, []);

  return (
    <div>
      <h1>Weather Report</h1>
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;
