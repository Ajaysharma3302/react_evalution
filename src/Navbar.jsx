import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, } from '@chakra-ui/react'
import { Flex} from '@chakra-ui/react'


 export default function  Navbar(){

const links=[
  {
to:'/',
label:'HOME',

  },
    {
to:'/productDetails',
label:'PRODUCTDETAILS'


    },
    {
        to:'/login',
        label:'LOGIN'
    }



]
    return(
        <>
        <Flex bg="blue.400">
       {links.map((link)=>(
    <ChakraLink as ={ReactRouterLink} key={link.to} to={link.to}/>
    ))} 
        </Flex>
        </>
    )
 }