import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose"
import bookRoute from "./route/book.route.js"
import userRoute from"./route/user.route.js"
const app = express();

app.use(cors());
app.use(express.json());


dotenv.config();
const PORT=process.env.PORT || 3000
const URI=process.env.MongoDBURI;




//connect to mongoDB
try {
    mongoose.connect(URI);
    console.log("Connected to mongodb")

    
} catch (error) {
    console.log('Error',error);
    
}

//defining the routes (middleware)
app.use('/book',bookRoute);
app.use('/user',userRoute);



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

