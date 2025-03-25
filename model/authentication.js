import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { Schema } = mongoose;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'Please enter a first name'],
    },
    lastName: {
        type: String,
    },
    username: {
        type: String,
        required: [true, "Enter your username"],
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid email address"],
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: 6, 
    },
});

UserSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10);
    console.log(salt);
    


    if (this.password) {
        this.password = await bcrypt.hash(this.password, salt);
    }
});
const User = mongoose.model("User", UserSchema);
export default User;