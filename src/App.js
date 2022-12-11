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
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
        console.log(user);
      } else {
        // logged out
        dispatch(logout())
      }

      // perform some cleanup actions
      return unsubscribe;
    })
  }, [dispatch])

  return (
    <div className="app">
        <Router>
        {
            user ? (
            <Routes>
              <Route path='/' element={<HomeScreen /> } exact={true} />
              <Route path='/profile' element={<ProfileScreen />} exact={true} />
            </Routes>
            ) : (
              <LoginScreen />
              )
          }
          </Router>
    </div>
  );
}

export default App;
