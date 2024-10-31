import mongoose, {Schema } from "mongoose";

const userSchema = new Schema({
    name:String,
    email:String,
    password : String,
    token: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    posts:[{
        type:mongoose.Schema.Types.ObjectID, 
        ref: 'Post',
    }]
})

const User = mongoose.model('User' , userSchema)
export default User