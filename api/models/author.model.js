import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    position:{
        type: String,
        enum: ['owner', 'author'],
        required: true,
        default: 'author'
    },
    name:{
        type: String,
        required: true,
    },
    profilePicture:{
        name:{
            type: String,
            required: false,
        },
        path:{
            type: String,
            required: false,
        }
    },
    description:{
        type: String,
        required: false,
    },
    username:{
        type: String,
        required: true,
        unique: true,
        update: false,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        min: 6,
        required: true
    },
    post:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts',
    }],
    social:{
        facebook:{
            type: String,
            required: false,
        },
        twitter:{
            type: String,
            required: false,
        },
        instagram:{
            type: String,
            required: false,
        },
        linkedin:{
            type: String,
            required: false,
        },
        github:{
            type: String,
            required: false,
        },
        youtube:{
            type: String,
            required: false,
        },
    }
});

export const Author = mongoose.model('authors', authorSchema);