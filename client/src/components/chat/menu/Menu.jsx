import { Box } from '@mui/material';
import {useState} from 'react' ;

import Header from "./Header" ;
import Search from "./Search" ;
import Convesations from './Conversations' ;


const Menu = () =>{

    const [text, setText] = useState('') ;
    return (
        <Box>
        <Header/>
        <Search setText = {setText}/>  
        <Convesations text = {text}/>
        </Box>
    )
}

export default Menu; 