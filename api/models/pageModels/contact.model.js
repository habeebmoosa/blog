import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true, 
    },
    message:{
        type: String,
        required: true,
    },
    createdDate:{
        type: Date,
        default: new Date()
    }
});

export const Contact = mongoose.model('Contact', contactSchema);