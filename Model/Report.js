import mongoose  from "mongoose";

const Schema = mongoose.Schema;

const Report = new Schema({
    _id: Schema.Types.ObjectId,
    userId: {type: Schema.Types.ObjectId, required: true, ref: 'User'},
    postId: {type: Schema.Types.ObjectId, required: true, ref: 'Post'},
    created_at: {type: Date, required: false, max: 200, default: Date.now},
    content: {type: String, required: true, max: 2000},
    status: {type: String, required: true, default: 'Pending', max: 200, enum: ['Finished', 'Pending']},
});

export {Report};