import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    age:{
        type:String
    },
    gemder:{
        type:String
    }
});
const userModel = mongoose.model("User",userSchema);

export {userModel};