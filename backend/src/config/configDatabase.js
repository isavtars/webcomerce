import mongoose from "mongoose"

mongoose.set("strictQuery", false);
const connection = () => {mongoose.connect("mongodb://localhost:27017/webcom",
{ useNewUrlParser: true },{

    }).then(()=>{
    console.log("connection successfully")}).catch((err)=>{
    console.log(err)
    })
  
}

export default connection;