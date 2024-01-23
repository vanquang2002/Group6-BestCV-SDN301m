import mongoose  from "mongoose";

const Schema = mongoose.Schema;

const Company = new Schema({
    _id: Schema.Types.ObjectId,
    account: {type: String, required: true, max: 200},
    password: {type: String, required: true, max: 200},
    email: {type: String, required: true, max: 200},
    name: {type: String, required: true, max: 50},
    bio: {type: String, required: false, max: 250},
    size: {type: String, required: true, max: 200},
    phone: {type: String, required: false, max: 250},
    website: {type: String, required: true, max: 200},
    location: {type: String, required: true, max: 200},
});

export {Company}