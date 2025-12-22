import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,           // ✅ Makes email unique
        lowercase: true,        // ✅ Converts to lowercase
        trim: true              // ✅ Removes whitespace
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    }
}, {
    timestamps: true  // ✅ Adds createdAt and updatedAt automatically
});

const userModel = mongoose.model("User", userSchema);

export { userModel };