import React, { Component, useState, useEffect } from 'react';
import './home.css';
import axios from 'axios';

const Home = () => {
    const [articles, setarticles] = useState([])
        useEffect(() =>{
          axios.get('http://localhost:3000/article').then((response)=>{
          setarticles(response.data.reverse());
        })
        },[articles])
        const [categories, setcategories] = useState([])
        useEffect(() =>{
          axios.get('http://localhost:3000/categories').then((response)=>{
            setcategories(response.data);
        })
        },[categories])
        let day = new Date()
        let num = articles.length;
        let hide = articles.filter(x => x.status == 'An').length;
        let show = num -hide;
        return (
            <div className="container">
            <div className="py-4" >
            <h4 class= 'text-success'>Trang chủ</h4>
            <div class = 'row row-cols-1 row-cols-md-4 g-4'>
              <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="news text-xs font-weight-bold text-primary text-uppercase mb-1">
                                Số thành viên đăng ký nhận tin tức</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800"><em>Đang cập nhật</em></div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-map-marked-alt fa-2x text-gray-300"></i>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="news text-xs font-weight-bold text-primary text-uppercase mb-1">
                                Tổng số chuyên mục</div>
                            <div class="h5 mb-0 font-weight-bold text-danger-800 text-danger"><em>{categories.length}</em></div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-map-marked-alt fa-2x text-gray-300"></i>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="news text-xs font-weight-bold text-primary text-uppercase mb-1">
                                Số lượng bài báo</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800 text-dark"><em>{num}</em>/<em class='text-danger'>{hide}</em>/<em class='text-success'>{show}</em></div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-map-marked-alt fa-2x text-gray-300"></i>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div class="card shadow" id='card'>
                <img id='img' src="https://www.wishesmsg.com/wp-content/uploads/good-day-message.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p class="card-text">Ngày {day.getDate()}, tháng {day.getMonth()}, năm {day.getFullYear()}</p>
                
                <p class="card-text">Thời gian: {day.getHours()}:{day.getMinutes()}:{day.getSeconds()}</p>
                </div>
            </div>
              
            </div>
            </div>
        )

 }
 export default Home; 