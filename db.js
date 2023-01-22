const mongoose = require("mongoose");

const connectToMongo = async () => {
    try{
        //mongodb connection string
        const con = await mongoose.connect(process.env.MONGOURI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })

        console.log(`MongoDB connection : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectToMongo;
