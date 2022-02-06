import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    title: { type: String },
    link: { type: String },
    thumbnail: { type: String },
    sapo: { type: String },
    category: { type: String },
    source: { type: String },
    status:{type: String, default: 'Hien'},
    release_time: { type: Date }
});

export const article = mongoose.model('article', articleSchema);
