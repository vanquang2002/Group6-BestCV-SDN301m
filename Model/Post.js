import mongoose  from "mongoose";

const Schema = mongoose.Schema;

const Post = new Schema({
    _id: Schema.Types.ObjectId,
    HRId: {type: Schema.Types.ObjectId, required: true, ref: 'HR'},
    companyId: {type: Schema.Types.ObjectId, required: true, ref: 'Company'},
    created_at: {type: Date, required: true, max: 200, default: Date.now},
    title: {type: String, required: true, max: 50},
    jobDescription: {type: String, required: false, max: 2000},
    salary: {type: String, required: false, max: 200},
    candidateReq: {type: String, required: false, max: 2000},
    location: {type: String, required: false, max: 200},
    deadline: {type: Date, required: true},
});

export {Post};