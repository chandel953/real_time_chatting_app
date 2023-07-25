import Conversation from '../model/Convesation.js' ;

export const newConversation = async (request,response) =>{
    try{
        const senderId = request.body.senderId;
        const receiverId = request.body.receiverId;
        
        const exist = await Conversation.findOne({ members: { $all: [receiverId, senderId]  }}) ;

        if(exist) {
            response.status(200).json('conversation already exists');
            return;
        }
        const newConversation = new Conversation({
            members: [senderId, receiverId]
        });
        
         await newConversation.save() ;  
        return response.status(200).json('conversation saved sucessfully') ;

    }
    catch(error){
        return response.status(500).json(error.message) ;
    }
}

export const getConversation = async (request, response) => {
    try {
        const senderId = request.body.senderId;
        const receiverId = request.body.receiverId;
        const conversation = await Conversation.findOne({ members: { $all: [receiverId ,senderId] }});
        response.status(200).json(conversation);
    } catch (error) {
        response.status(500).json(error);
    }

}
