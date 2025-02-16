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
    },
    expiresAt: {
        type: Date, 
        default: () => new Date(Date.now() + 60 * 60 * 1000), // 1 hour from now
        index: { expires: 3600 } // TTL index (3600 seconds = 1 hour)
    }
});

const savedFile=mongoose.model("savedFile",shareFileSchema);
export default savedFile;