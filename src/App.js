import React, { useState } from 'react';
import { generateMockSpotifyData } from './utils/mockSpotifyData';
import 'react-tooltip/dist/react-tooltip.css';
import './App.css';

function App() {
  const [heatmapData, setHeatmapData] = useState([]);

  // Load and process mock Spotify data
  const loadSpotifyData = () => {
    const processedData = generateMockSpotifyData(); // Generate mock data
    console.log('Mock Data:', processedData); 
    setHeatmapData(processedData); 
  };

  const groupDataByYear = () => {
    return heatmapData.reduce((acc, entry) => {
      const year = entry.month.split('-')[0];
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(entry);
      return acc;
    }, {});
  };

  const groupedData = groupDataByYear();

  return (
    <div className="container">
      <header className="header">
        <h1>Spotify Monthly Heatmap</h1>
        <button onClick={loadSpotifyData}>Load Mock Spotify Data</button>
      </header>
      <main>
        <h2>Music Calendar Heatmap</h2>
        <div className="heatmap">
          {Object.keys(groupedData).map((year) => (
            <div key={year} className="year-section">
              <h3>{year}</h3>
              <div className="month-grid">
                {groupedData[year].map((monthData) => (
                  <div
                    key={monthData.month}
                    className={`month-cell ${
                      monthData.count < 50
                        ? 'color-scale-1'
                        : monthData.count < 100
                        ? 'color-scale-2'
                        : 'color-scale-3'
                    }`}
                    title={`Month: ${monthData.month}
Songs Played: ${monthData.count}
Total Minutes: ${monthData.totalMinutes}
Top Track: ${monthData.topTrack}`}
                  >
                    <span>{monthData.month.split('-')[1]}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
