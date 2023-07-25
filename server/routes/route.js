import express from 'express' ;
import { newConversation, getConversation } from '../controller/conversation-controller.js';
import { newMessage,getMessages } from '../controller/message-controller.js';

const route = express.Router();

import { addUser , getUsers } from '../controller/user-contoller.js';

route.post('/add',addUser) ;
route.get('/users',getUsers) ;
route.post('/conversation/add',newConversation) ;
route.post('/conversation/get',getConversation) ;
route.post('/message/add' ,newMessage) ;
route.get('/message/get/:id' ,getMessages) ;

 
export default route ;