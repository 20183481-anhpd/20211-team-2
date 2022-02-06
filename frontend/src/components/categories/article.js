import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import './categories.css';

import { Link, useParams } from "react-router-dom";

const ArticleInC  = () => {
        const [category, setcategory] = useState({category: ''})
        //const [articles, setarticles] = useState([])
        const {id} = useParams();
        const [articles, setarticles] = useState([])
        useEffect(() =>{
          axios.get('http://localhost:3000/article').then((response)=>{
          setarticles(response.data.reverse());
        })
        },[articles])
        const deleteArticle = async (id) =>{
          await axios.delete(`http://localhost:3000/deleteArticle/${id}`);    
        }
        useEffect(() => {
            loadArticle();
        }, []);
        const loadArticle = async () => {
        const res = await axios.get(`http://localhost:3000/category/${id}`);
        setcategory(res.data)}   
        return (
            <div className="container">
            <div className="py-4">
            <Link to={'/category'}><i class="fa fa-angle-double-left mt-3" aria-hidden="true"></i>Tất cả các chuyên mục</Link>
            <h4 class = 'text-success mt-2'> Các bài báo thuộc chuyên mục {category.category}</h4>
            <br/>
            <div class="row row-cols-1 row-cols-md-4 g-4">     
                      {                      
                        articles.filter(x => x.category == category.category).map((val, key) => {
                          return(  
                            <div class="card shadow" id='article'>
                              <img id='thumbnail' src={val.thumbnail} class="card-img-top shadow mt-3" />
                              <div class="card-body" >
                              <h8 class="card-title">{val.title}</h8>  
                              </div>
                              <div class ='btn-group'>
                              <Link to = {`/article/${val._id}`} class="btn btn-primary mb-1" id='xem'>Xem chi tiết</Link>
                              <a>  </a><a class="btn btn-danger" onClick={() => deleteArticle(val._id)} id='xoa'  type="button" >Xóa</a>
                              </div>
                               <a href={val.link} target="_blank"><i class="fa fa-hand-o-right" aria-hidden="true"></i> Xem bài báo gốc</a>
                            </div>
                          )
                        } 
                      )
                      }                                 
              </div>
            </div>
            </div>
        )
    
}
 export default ArticleInC;