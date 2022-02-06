import React from 'react';
import { Component, useState, useEffect} from 'react'
import './crawl.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import $ from 'jquery'; 

const Crawl = () => {
  const [article, setarticle] = useState({link:'', title:'', thumbnail:'', sapo:'', source:'', category:'',status:'', time :'' })
  const onInputChange = event => {
      const { value, name } = event.target
      setarticle({ ...article, [name]: value })
  };
  let day = new Date();
  const Add = () =>{
    axios.post('http://localhost:3000/article', article)
   }
        return (
          <div className="container">
            <div className="py-4" >         
              <h4 class = "text-success">Thu thập các bài báo</h4>     
              <form>        
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" name='title' onChange={onInputChange} />
                <label for="floatingInput">Tiêu đề</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" name='link' onChange={onInputChange} />
                <label for="floatingInput">Link</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" name='thumbnail' onChange={onInputChange} />
                <label for="floatingInput">Thumbnail</label>
            </div>
            <div class="form-floating mb-3">
                <textarea class="form-control" id="floatingTextarea2" name='sapo' onChange={onInputChange} ></textarea>
                <label for="floatingTextarea2">Sapo</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" name='source' onChange={onInputChange} />
                <label for="floatingInput">Source</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" name='category' onChange={onInputChange}/>
                <label for="floatingInput">Category</label>
            </div>
            <div class="form-floating mb-3">
            <select class="custom-select custom-select-lg mb-3 form-control" name='status' onChange={onInputChange} >  
                    <option selected>Chọn trạng thái</option>
                    <option value = 'Hien'>Hiện</option>                              
                    <option value='An'>Ẩn</option>  
            </select>
            <label for="floatingInput">Trạng thái</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" name='time' onChange={onInputChange} value = {day} />
                <label for="floatingInput">Time</label>
            </div>
            <button class="btn btn-primary" onClick={Add} >Crawl</button>
            </form>
            
            </div>
          </div>
              
        )

 }
 //export {flag}
 export default Crawl