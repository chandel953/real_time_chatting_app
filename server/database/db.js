
import mongoose from "mongoose";
import dotenv from 'dotenv' ;

dotenv.config();

const USERNAME = process.env.DB_USERNAME ;
const PASS = process.env.DB_PASSWORD ;

const connection = async () =>{
    const URL= `mongodb://${USERNAME}:${PASS}@ac-ha44dtp-shard-00-00.19msxra.mongodb.net:27017,ac-ha44dtp-shard-00-01.19msxra.mongodb.net:27017,ac-ha44dtp-shard-00-02.19msxra.mongodb.net:27017/?ssl=true&replicaSet=atlas-7n9u1m-shard-0&authSource=admin&retryWrites=true&w=majority` ;

    try{
        await mongoose.connect(URL,{useUnifiedTopology: true});
        console.log('db connected sucessfully') ; 
    }catch(error){
        console.log('error' ,error.message) ;
    }
}

export default connection ;