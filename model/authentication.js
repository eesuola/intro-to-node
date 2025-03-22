import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
    first_name:{
        type: String,
        required: true ,
        min: 6,
        max: 10
    },
    last_name:{
        type: String,
        required: true,
        min: 6,
        max: 10
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          "Please enter a valid email address",
        ],
      },
      password: {
        type: String,
        required: true,
        minlength: 8, // Minimum length of 8 characters
        validate: {
          validator: function (value) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
          },
          message:
            "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character",
        },
      },
      
})

const User = mongoose.model("User", UserSchema);
export default User;