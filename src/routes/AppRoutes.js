import { ChakraProvider } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    
  } from 'react-router-dom';import { Front } from '../components/Front';
import { Login } from '../components/Login';
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute';
import { useSelector } from 'react-redux';



export const AppRoutes = () => {
  const [checking, setChecking] = useState(false);
  const auth = useSelector(state => state.auth)
  
  useEffect(() => {
    if (
      auth.isLoggedIn===true && 
      localStorage.getItem('token')) {
      setChecking(true)
    }else{
      setChecking(false)
    }
  }, [auth]);
  
  return (
      <ChakraProvider>
        <Router>
        <Routes>
          <Route
            path='/*'
            element={
              <PrivateRoute
                isAuthenticated={checking}
                element={<Front/>}
                />
            }          
            
            />

          <Route
            path='/login'
            element={
              <PublicRoute
                isAuthenticated={checking}
                element={<Login/>}
                />
            }          
            
            />
        </Routes>    
      </Router>
      </ChakraProvider>

  )
};
