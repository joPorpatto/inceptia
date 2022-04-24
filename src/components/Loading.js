import React from 'react';
import { Center, Heading, Spinner } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

export const Loading = () => {
  const {status,inbound} = useSelector(state => state.inbound);
  return (
    <Center mt={4}>
      {(status==='loading') && <Spinner />}
      {
        (status==='success') && (inbound.length===0) &&
        <Heading as='h6' size='xs' mr={2}>Sin resultados</Heading>          
      }
    </Center>
  )
}
