import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import ChatRoom from './components/ChatRoom';

const App: React.FC = () => {
  const [user, setUser] = useState<any>(null);

  const loginUser = (user: any) => setUser(user);
  const logoutUser = () => setUser(null);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login onLogin={loginUser} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/chat" element={<ChatRoom user={user} onLogout={logoutUser} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
