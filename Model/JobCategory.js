import mongoose  from "mongoose";

const Schema = mongoose.Schema;

const JobCategory = new Schema({
    _id: Schema.Types.ObjectId,
    name: {type: String, required: true, max: 200},
    avtar: {type: String, required: true, max: 200},
});