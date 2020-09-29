import React from 'react';
const api = {
  key: "900aa6fca4d34e1a62620efd5efc87af",
  base: "https://api.openweathermap.org/data/2.5/"
   
}

function App() {
  return (
    <div className="app warm">
      <main>
        <div className="search-box">
          <input 
            type = "text"
            className = "search-bar"
            placeholder = "Search..."
          />

        </div>
      </main>
    </div>
  );
}

export default App;
