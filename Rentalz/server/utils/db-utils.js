
import mongoose from "mongoose"

const connectToDB = async () => {

  try{
    const connectStr = 'mongodb+srv://rentalz_123:rentalz_123@cluster0.9fulv7r.mongodb.net/rentalz-v1?retryWrites=true&w=majority';

    const connection = await mongoose.connect(connectStr);
  
    // console.log(`MongoDB Connection -> ${JSON.stringify(connection)}`);  
    console.log(`MongoDB Connection -> ${connection.connection.host}`);  
  }catch (error){

    console.log(error);
  }
}

connectToDB();
