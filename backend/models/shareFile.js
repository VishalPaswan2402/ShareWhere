import mongoose from "mongoose";
const Schema=mongoose.Schema;

const shareFileSchema=new Schema({
    asset_id:{
        type:String,
        required:true
    },
    public_id:{
        type:String,
        required:true
    },
    fileFormat:{
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
})