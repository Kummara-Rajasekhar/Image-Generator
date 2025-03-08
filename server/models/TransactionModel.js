import mongoose from "mongoose";



const transitionSchema=new mongoose.Schema({
    userId:{type:String,required:true},
    plan:{type:String,required:true},
    amount:{type:Number,required:true},
    credits:{type:Number,required:true},
    payment:{type:Boolean,required:true},
    date:{type:Number},

})

const transactionModel= mongoose.models.user ||   mongoose.model("transaction",transitionSchema)

export default transactionModel;











