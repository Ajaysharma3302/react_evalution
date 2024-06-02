import { Box,Input,Container,Heading,Stack } from '@chakra-ui/react'

import {useState} from "react"



export function Login(){
const[email,setEmail]=useState("")

const[password,setPassword]=useState({

    email:'false',
    token:'null',

})
return(
    <>
    <Container>
    <Box>
    <Heading as='h2' size='3xl' noOfLines={1}>
    (3xl) Login Page
  </Heading>
  <Stack spacing={3}>
  <Input variant='outline' placeholder='email' value={email} onChange={(e)=>
setEmail(e.target.value)
  } />
  <Input variant='outline' placeholder='password' value={password} onChange={(e)=>
setPassword(e.target.value)
  } />
    </Stack>
    </Box>
    </Container>
    </>
)

}