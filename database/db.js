import mongoose from 'mongoose';
import dotenv from "dotenv"

dotenv.config();
const Connection = async () => {
    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD; 

    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-9adx8td-shard-00-00.zclzvlx.mongodb.net:27017,ac-9adx8td-shard-00-01.zclzvlx.mongodb.net:27017,ac-9adx8td-shard-00-02.zclzvlx.mongodb.net:27017/?ssl=true&replicaSet=atlas-cd0mfc-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true });
        console.log('Database Connected Succesfully');
    } catch (error) {
        console.log('Error: ', error);
    }

};

export default Connection;