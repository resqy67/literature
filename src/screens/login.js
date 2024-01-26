import React, { Component } from 'react'
import { Box, Button, Center, Container, Heading, Text } from 'native-base'
import Cobain from '../components/Cobain'

export class Login extends Component {
  render() {
    return (
        // buatkan button diatas kiri tombol back dan form login username dan password beserta button login
        // <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        //     <Text>Login Screen</Text>
        // </Box>
        // tombol back
        <Box safeArea bg="">
            <Button onPress={() => navigation.goBack()}>Back</Button>
        </Box>,
        <Cobain />
        

    )
  }
}

export default Login