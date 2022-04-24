import { Center, Heading, Select } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clientSelected, getClients } from '../app/clientsSlice';

export const Clients = () => {
  const dispatch = useDispatch()
  const {clients} = useSelector(state => state.clients)
  const [value, setValue] = useState("");
  
  const handleChange = (e) => {
    e.preventDefault()
    setValue(e.target.value)
  };

  useEffect(() => {
    dispatch(getClients())
  }, []);

  useEffect(() => {
    dispatch(clientSelected(value))    
  }, [value]);

  return (
    <Center w='300px' m={2} >
      <Heading as='h6' size='xs' mr={2}>Cliente</Heading>
        <Select
          placeholder='Seleccionar opción' 
          value={value}
          onChange={handleChange}
        >
        {
         (clients.length > 0) &&
          clients.map((client)=>{
          return (
            <option 
              key={client.id} 
              name={client.id}
              value={client.id}
            >
                {client.name} 
            </option>
          )
          })
        }
        </Select>
    </Center>    
  )
}
