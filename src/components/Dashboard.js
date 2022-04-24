import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react' ;
import React  from 'react';
import { useSelector } from 'react-redux';

const tableList = [

  {id:1 , name: 'Gestionado' },
  {id:2 , name: 'ID Caso' },
  {id:3 , name: 'Teléfono' },
  {id:4 , name: 'Dni' },
  {id:5 , name: 'Grupo' },
  {id:6 , name: 'Orden' },
  {id:7 , name: 'Llamada' },
  {id:8 , name: 'Estado' },

]

export const Dashboard = () => {
  const {inbound} = useSelector(state => state.inbound);

  return (
    <TableContainer   border="1px solid" m={4}>
      <Table size='sm' variant='striped' colorScheme='telegram'>
        <Thead >
          <Tr >
            {
              tableList.map((th) => {
                return(
                  <Th key={th.id}>{th.name}</Th>
                )
              })
            }
           
          </Tr>
        </Thead>

        <Tbody>
          {
            (inbound.length >0) &&
            inbound.map(resp => {
              return (
                  <Tr key={resp.id}>
                    <Td>{resp.last_updated}</Td>          
                    <Td>{resp.case_uuid}</Td>          
                    <Td>{resp.phone}</Td>            
                    <Td>{resp.extra_metadata.dni}</Td>          
                    <Td>{resp.extra_metadata.grupo}</Td>          
                    <Td>{resp.extra_metadata.orden}</Td>            
                    <Td>{resp.case_duration}</Td>          
                    <Td>{resp.case_result.name}</Td>            
                  </Tr>
              )
            })
          }     
        </Tbody>   

      </Table>
    </TableContainer>
  )
};
