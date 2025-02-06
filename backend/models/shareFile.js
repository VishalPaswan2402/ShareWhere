import mongoose from "mongoose";
const Schema=mongoose.Schema;

const shareFileSchema=new Schema({
    fileName:{
        type :String,
        required:true
    },
    fileType:{
        type :String,
        required:true
    },
    shareUrl:{
        type:String,
        required:true
    },
    secretCode:{
        type:Number,
        required:true
    }
});

const savedFile=mongoose.model("savedFile",shareFileSchema);
export default savedFile;