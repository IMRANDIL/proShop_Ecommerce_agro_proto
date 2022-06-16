import mongoose from 'mongoose';




const dbConnection = async()=>{
    try {
        const conn =  await mongoose.connect(process.env.URI);
        console.log(`Mongodb connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
}



export default dbConnection;