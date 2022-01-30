import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import './news.css';

import { Link, useParams } from "react-router-dom";

const Article  = () => {
        const [article, setarticle] = useState({link:'', title:'', thumbnail:'', sapo:'', source:'', category:'', time :'' })
        //const [articles, setarticles] = useState([])
        const {id} = useParams();
        const onInputChange = event => {
            const { value, name } = event.target
            setarticle({ ...article, [name]: value })
        };
        const updateArticle = async (id, newarticle) => {
            await axios.put(`http://localhost:3000/updateArticle/${id}`, newarticle);
          };
        useEffect(() => {
            loadArticle();
        }, []);
        const loadArticle = async () => {
        const res = await axios.get(`http://localhost:3000/article/${id}`);
        setarticle(res.data)}   
        return (
            <div className="container">
            <div className="py-4">
            <h4> </h4>
            <Link to={'/news'}><i class="fa fa-angle-double-left" aria-hidden="true"></i>Tất cả các báo</Link>
            <h4 class = "text-success">Thông tin chi tiết </h4>
            <br/>
            <form >
            <img src={article.thumbnail}/>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" name='title' onChange={onInputChange} value={article.title}/>
                <label for="floatingInput">Tiêu đề</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" name='link' onChange={onInputChange} value={article.link}/>
                <label for="floatingInput">Link</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" name='thumbnail' onChange={onInputChange} value={article.thumbnail}/>
                <label for="floatingInput">Thumbnail</label>
            </div>
            <div class="form-floating mb-3">
                <textarea class="form-control" id="floatingTextarea2" name='sapo' onChange={onInputChange} value={article.sapo}></textarea>
                <label for="floatingTextarea2">Sapo</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" name='source' onChange={onInputChange} value={article.source}/>
                <label for="floatingInput">Source</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" name='category' onChange={onInputChange} value={article.category}/>
                <label for="floatingInput">Category</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" name='time' onChange={onInputChange} value={article.time}/>
                <label for="floatingInput">Time</label>
            </div>
            <button class="btn btn-primary" onClick={updateArticle(article._id,article)}>Lưu thay đổi</button>
            </form>
            </div>
            </div>
        )
    
}
 export default Article;