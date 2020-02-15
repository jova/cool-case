import React from 'react';
import Stream from './pages/Stream';
import Watch from './pages/Watch';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path="/stream" component={Stream} />
        <Route path="/watch" component={Watch} />
      </div>
    </Router>
  );
}

export default App;
