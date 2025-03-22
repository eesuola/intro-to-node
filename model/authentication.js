import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { Schema } = mongoose;

const UserSchema = new Schema({
    firstName: {
        type: String,
        minlength: 2, // Fixed typo
        max: 50,
    },
    lastName: {
        type: String,
        minlength: 2,
        max: 50,
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
        minlength: 6, // Fixed typo
    },
}, { timestamps: true }); // Added timestamps

// Hash the password before saving
UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err);
    }
});

const User = mongoose.model("User", UserSchema);
export default User;