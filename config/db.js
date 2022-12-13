const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connect: ${connect.connection.host}`);
    }
    catch {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB