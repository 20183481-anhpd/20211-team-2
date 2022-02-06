import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import  {CategoriesModel}  from "./Model/categoriesModel.js";
import {article} from './Model/articleModel.js';
import  mongodb  from "mongodb";
import cheerio from 'cheerio';
import request from 'request-promise';
import { UrlModel } from './Model/urlModel.js';

const app = express();
app.use(express.json())
app.use(cors())
//Topic API
app.post('/categories',async (req, res) => {
    const category = req.body.category;   
    const newCategory = new CategoriesModel({category: category})

    try {
        await newCategory.save();
        res.status(201).json(newCategory)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
});
app.get('/categories',async (req, res) => {
    CategoriesModel.find({}, (err, result)=>{
        if(err){
            res.send(err)
        }
        res.send(result);
    })
});
app.get('/category/:id', async(req, res)=>{
    const id  = req.params.id;
    try {
        const category = await CategoriesModel.findById(id);
        console.log(category)
        res.status(200).json(category);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})
app.put('/updatecategory', async (req, res)=>{
    const newCategory = req.body.newCategory;
    const id = req.body.id;
    try {
        await CategoriesModel.findById(id, (err, updateCategory) => {
            updateCategory.category = newCategory;
            updateCategory.save();
            
          }).clone();
   } catch (err) {
        console.log(err)
    }
})
app.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    await CategoriesModel.findByIdAndDelete(id).exec();
    res.send("delete");
    
})
//User API


app.use(bodyParser.json({limit: "30mb", extended:true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}))


const CONNECTION_URL = 'mongodb+srv://project:20211@cluster0.bdcg1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 3000

mongoose.connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true} )
.then(() => app.listen(PORT, ()=> console.log(`Sever running on ${PORT}`)))
.catch((error) => console.log(error.message));

//Article API
app.post('/article', async (req, res) => {
    
    try {
        const newArticle = req.body;
        const Article = new article(newArticle)
        console.log(Article)
        await Article.save();
        res.status(201).json(Article);
                
    } catch (error) {
        res.status(409).json({message: error.message})
    }
});
app.get('/article', async(req, res) => {
    try {
        const Article = await article.find();
        console.log(Article)
        res.status(200).json(Article);
      } catch (err) {
        res.status(500).json({ error: err });
      }
} )
app.get('/article/:id', async(req, res)=>{
    const id  = req.params.id;
    try {
        const Article = await article.findById(id);
        console.log(Article)
        res.status(200).json(Article);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})

app.put('/updateArticle/:id', async (req, res)=>{
    try {
        const id = req.params.id;
        const modifiedArticle = req.body;
        console.log(modifiedArticle)
        await article.updateOne({ _id: id }, { $set: modifiedArticle });
        res.json({
            success: true,
            data: modifiedArticle
        })
    } catch (err) {
        res.json({
            success: false,
            message: "Failed to modified"
        });
    }
})
app.delete('/deleteArticle/:id', async (req, res) => {
    const id = req.params.id;
    await article.findByIdAndDelete(id).exec();
    res.send("delete");
})

//URL API

app.post('/url', async (req, res) => {
    
    try {
        const newUrl = req.body;
        const url = new UrlModel(newUrl)
        console.log(url)
        await url.save();
        res.status(201).json(url);
                
    } catch (error) {
        res.status(409).json({message: error.message})
    }
});
app.get('/url', async(req, res) => {
    try {
        const url = await UrlModel.find();
        res.status(200).json(url);
      } catch (err) {
        res.status(500).json({ error: err });
      }
} )
app.get('/url/:id', async(req, res)=>{
    const id  = req.params.id;
    try {
        const url = await UrlModel.findById(id);
        console.log(url)
        res.status(200).json(url);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})

app.put('/updateUrl/:id', async (req, res)=>{
    try {
        const id = req.params.id;
        const modifiedUrl = req.body;
        console.log(modifiedUrl)
        await UrlModel.updateOne({ _id: id }, { $set: modifiedUrl });
        res.json({
            success: true,
            data: modifiedUrl
        })
    } catch (err) {
        res.json({
            success: false,
            message: "Failed to modified "
        });
    }
})
app.delete('/deleteUrl/:id', async (req, res) => {
    const id = req.params.id;
    await UrlModel.findByIdAndDelete(id).exec();
    res.send("delete");
})