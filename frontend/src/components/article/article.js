import React, { Component, useState, useEffect } from 'react';
import './article.css';
import axios from 'axios';
import { Link, Route, Routes, useParams } from 'react-router-dom';

const NewsList = () => {
        const [articles, setarticles] = useState([]);
        
        useEffect(() => {
          loadArticle();
      }, []);
      const loadArticle = async () => {
        axios.get('http://localhost:3000/article').then((response)=>{
        setarticles(response.data);
      })
    }
    
        const deleteArticle = async (id) =>{
          await axios.delete(`http://localhost:3000/deleteArticle/${id}`);    
        }

        return (
            <div className="container">
            <div className="py-4" >         
              <h4 class = "text-success">Danh sách các bài báo</h4>
              <div class="row row-cols-1 row-cols-md-4 g-4">
                    
                      {                      
                        articles.map((val, key) => {
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
 export default NewsList;