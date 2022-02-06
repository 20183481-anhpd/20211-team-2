import mongoose from 'mongoose';
//import internal from 'stream';
const schema = mongoose.Schema({
    source: {
        type: String,
        require: true
    },
    url:{
        type: String,
        require: true
    }
})

export const UrlModel = mongoose.model('UrlModel', schema)
