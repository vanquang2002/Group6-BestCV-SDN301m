import mongoose  from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    _id: Schema.Types.ObjectId,
    username: {type: String, required: true, max: 200},
    password: {type: String, required: true, max: 200},
    email: {type: String, required: true, max: 200},
    phone: {type: String, required: true, max: 200},
    isVip: {type: Boolean, required: false},
    isAdmin: {type: Boolean, required: false},
    avatar: {type: String, required: false, max: 200},
    bio: {type: String, required: false, max: 250},
    created_at: {type: Date, required: true, default: Date.now},
    savedPost: {type: Array, require: false},
    followCompany: {type: Array, require: false}
});

const User = mongoose.model('User',UserSchema);
export {User}