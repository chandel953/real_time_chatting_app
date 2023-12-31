import { useState, useEffect, useContext, useRef } from "react";
import { Box, styled } from "@mui/material";
import {newMessage ,getMessages} from '../../../Service/api' ;

import {AccountContext} from '../../../context/AccountProvider' ;
import {Message} from './Message' ;
import Footer from "./Footer";



const Wrapper = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
  background-size: 50%;
`;

const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;

const Messages = ({person,conversation}) => {

        const[value ,setValue] = useState('');
    const {account } = useContext(AccountContext);
    const [messages ,setMessages] = useState([]);
    const[newMessageFlag, setNewMessageFlag] =useState(false) ;

  useEffect(() => {
        const getMessageDetails = async () => {
            let data = await getMessages(conversation._id);
            setMessages(data);
        }
        conversation._id && getMessageDetails();
    }, [person._id ,conversation._id,newMessageFlag])


    const sendText = async (e) =>{
        const code  = e.keyCode || e.which ;
        if(code===13){
            let message ={
              conversationId: conversation._Id,
                senderId:account.sub,
                receiverId:person.sub,
                type:'text',
                text:value
                
            };
            await newMessage(message) ;

            setValue('');
            setNewMessageFlag(prev => ! prev) ;
        }
    }

  return (
    <Wrapper> 
      <Component>
      {
        messages && messages.map(message => (
            <Message message = {message}/>           
        ))



      }
      </Component>
      <Footer
        sendText= {sendText}
        setValue = {setValue}
        value={value}
       />
    </Wrapper>
  );
};

export default Messages;
