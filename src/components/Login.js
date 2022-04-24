import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  FormErrorMessage,
  Spinner,
  Center
} from '@chakra-ui/react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { login } from '../app/authSlice';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Formato de email inválido')
    .required('Por favor ingrese un email'),

  password: Yup.string()
    .required('Por favor ingrese una contraseña')
    .trim()   
});

export const Login = () => {
  const dispatch = useDispatch();
    const {status} = useSelector(state => state.auth);

  return (

    <Formik
      initialValues={{ email: 'reactdev@iniceptia.ai', password: '4eSBbHqiCTPdBCTj' }}
      validationSchema={validationSchema}
      onSubmit={ (values, action) => {
        dispatch(login(values))   
      }}
    >

    {formik => (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Acceder</Heading>
        </Stack>
        <Box          
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          p={8}
        >
          <Stack spacing={4}  as="form" onSubmit={formik.handleSubmit}>

            <FormControl id="email" isInvalid={formik.errors.email && formik.touched.email}>
              <FormLabel>Email </FormLabel>
              <Input 
                type="email"
                onChange={formik.handleChange} 
                value={formik.values.email}
                name="email" 
                placeholder="Ingresar un email"
                onBlur={formik.handleBlur}                
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>

            <FormControl id="password" isInvalid={formik.errors.password && formik.touched.password}>
              <FormLabel>Contraseña</FormLabel>
              <Input 
                type="password"
                onChange={formik.handleChange} 
                value={formik.values.password}
                name="password" 
                placeholder="Ingresar Contraseña"
                onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
            </FormControl>

            <Stack spacing={10}>
              
              <Button
                type='submit'
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Entrar
              </Button>
              {
                (status==='loading') &&
                <Center mt={2}>
                  <Spinner/>
                </Center>
              }
            </Stack>
          </Stack>
        </Box>

      </Stack>
    </Flex>

    )}     
    </Formik>    
  )
};
