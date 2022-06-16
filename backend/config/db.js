import mongoose from 'mongoose';




const dbConnection = async()=>{
    try {
        const conn =  await mongoose.connect(process.env.URI);
        console.log(`Mongodb connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold);
        process.exit(1);
    }
}



export default dbConnection;