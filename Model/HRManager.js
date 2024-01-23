import mongoose  from "mongoose";

const Schema = mongoose.Schema;

const HRManager = new Schema({
    _id: Schema.Types.ObjectId,
    account: {type: String, required: true, max: 200},
    password: {type: String, required: true, max: 200},
    conpanyId: {type: Schema.Types.ObjectId, ref: 'Company'},
});