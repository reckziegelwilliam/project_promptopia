import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists'],
        required: [true, 'Email is required'],

    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        match: [/^(?=.{1,50}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, 'Invalid username'],
    },
    image: {
        type: String,
    }
});

//models object stores all registered models. If model is stored inside, redefine model

const User = models.User || model("User", UserSchema);

export default User;