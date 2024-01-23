import mongoose  from "mongoose";

const Schema = mongoose.Schema;

const Notification = new Schema({
    _id: Schema.Types.ObjectId,
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    content: {type: String, required: true, max: 200},
    created_at: {type: Date, required: true, max: 200},
});