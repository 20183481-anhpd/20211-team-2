import mongoose from 'mongoose';
//import internal from 'stream';
const schema = mongoose.Schema({
    category: {
        type: String,
        require: true
    }
})

export const CategoriesModel = mongoose.model('CategoriesModel', schema)
