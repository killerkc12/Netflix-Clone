import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen/LoginScreen';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // logged in
        console.log(userAuth);
      } else {
        // logged out

      }

      return () => {
        // perform some cleanup actions
        unsubscribe();
      }
    })
  }, [])

  return (
    <div className="app">
      <Router>
        {
          !user ? (
            <Routes>
              <Route path="/" element={<LoginScreen />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          )
        }
    </Router>
    </div>
  );
}

export default App;
