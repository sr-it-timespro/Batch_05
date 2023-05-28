
import mongoose from "mongoose"
import dotenv from "dotenv";

const connectToDB = async () => {

  try{

    dotenv.config();

    const connectStr = process.env.MONGO_DB_URI;
    const connection = await mongoose.connect(connectStr);
  
    // console.log(`MongoDB Connection -> ${JSON.stringify(connection)}`);  
    console.log(`MongoDB Connection -> ${connection.connection.host}`);  
  }catch (error){

    console.log(error);
  }
}

// connectToDB();

export {connectToDB}
