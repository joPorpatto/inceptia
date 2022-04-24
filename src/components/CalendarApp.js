import { Box, Button, Heading, Spacer } from '@chakra-ui/react';
import React,{  useState }  from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import  {getInbound}  from '../app/InboundSlice';
import swal from 'sweetalert';
import './calendar.css';

export const CalendarApp = () => {
  const dispatch = useDispatch();
  const {select} = useSelector(state => state.clients);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [StartYear,StartMonth,StartDay]  = [startDate.getFullYear(),startDate.getMonth()+1, startDate.getDate(), ];
  const [EndYear,EndMonth,EndDay]  = [endDate.getFullYear(),endDate.getMonth()+1, endDate.getDate(), ];

  const start = `${StartYear}-${StartMonth}-${StartDay}`;
  const end = `${EndYear}-${EndMonth}-${EndDay}`;

  const values = {
      id:select,
      start:start,
      end:end
  };

  const handleSubmit = (e) =>{
    e.preventDefault();      
    if ( select!=="" && (startDate.getTime() <= endDate.getTime())) {
        dispatch(getInbound(values))           
    }else{
      swal("Selecciona un Cliente");
      return
    }
  };

  return (
    <>      
      <Spacer />
      <Box  className='box' >
          <Heading as='h6' size='xs' mr={2}>Desde</Heading>   
      </Box>
      <Box  className='box' >
          <DatePicker 
            className='picker'
            selectsStart selected={startDate} 
            onChange={(date) => setStartDate(date)} />
      </Box>
      <Box  className='box' >
          <Heading as='h6' size='xs' mr={2}>Hasta</Heading>          
      </Box>
      <Box className='box'>        
          <DatePicker 
            className='picker'
            selectsEnd selected={endDate} 
            minDate={startDate}
            onChange={(date) => setEndDate(date)} />
      </Box>
      <Box className='box'>
        <form onSubmit={handleSubmit}>
          <Button type='submit' colorScheme='blue'>Buscar</Button>
        </form>
      </Box> 
    </>
  )
}

