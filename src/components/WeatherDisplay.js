import React from 'react';

const WeatherDisplay = ({ weather }) => {
  const { temperature, conditions } = weather;

  // Determine color based on temperature
  const temperatureColor = temperature > 20 ? 'red' : 'blue';

  return (
    <div>
      <p style={{ color: temperatureColor }}>Temperature: {temperature}</p>
      {/* Ensure that the span element is present for conditions */}
      <span>Conditions: {conditions}</span>
    </div>
  );
};

export default WeatherDisplay;



