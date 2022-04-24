import { Box, Button, Flex, Heading, Spacer } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../app/authSlice';
import {  CalendarApp } from './CalendarApp';
import { Clients } from './Clients';
import { Dashboard } from './Dashboard';
import { Loading } from './Loading';


export const Front = () => {
  const dispatch = useDispatch()
  const handleClick = () =>{
    dispatch(logout())
  };

  return (
    
      <Box spacing={10}>

            <Flex>
              <Box p='2' m={4}>
                <Heading >Reportes Inceptia </Heading>
              </Box>
              <Spacer />
              <Box>                
                <Button
                  m={4}
                  type='submit'
                  onClick={handleClick}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                   }}>
                  Salir
                </Button>
              </Box>
            </Flex>  

            <Flex m={4} >
              <Clients/>
              <CalendarApp/>      
            </Flex>

            <Dashboard/>
            <Loading/>
           
      </Box>
    )
};
