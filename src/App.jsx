import React from 'react';
import './index.css';
import Todowrapper from './components/Todowrapper';

function App() {
  return (
    <div className="bg-red-500 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-xl w-full">
        <Todowrapper />
      </div>
    </div>
  );
}

export default App;
