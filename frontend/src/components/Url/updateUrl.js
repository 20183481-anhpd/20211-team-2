import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import './url.css';
import { Link, useParams } from "react-router-dom";

const UpdateUrl  = () => {
        const [url, seturl] = useState({source:'', url: ''})
        //const [articles, setarticles] = useState([])
        const {id} = useParams();
        const onInputChange = event => {
            const { value, name } = event.target
            seturl({ ...url, [name]: value })
        };
        const UpdateUrl = async (id, newUrl) => {
            await axios.put(`http://localhost:3000/updateUrl/${id}`, newUrl);
          };
        useEffect(() => {
            loadUrl();
        }, []);
        const loadUrl = async () => {
        const res = await axios.get(`http://localhost:3000/url/${id}`);
        seturl(res.data)}   
        return (
            <div className="container">
            <div className="py-4">
            <h4> </h4>
            <Link to={'/static'}><i class="fa fa-angle-double-left" aria-hidden="true"></i>All Url</Link>
            <h4 class = "text-success">Thông tin chi tiết </h4>
            <br/>
            <form >
            <select class="form-select mb-3" name='source' onChange={onInputChange} value={url.source}>
            <option value='Kienthuc.vn'>Kienthuc.vn</option>  
                        <option value='Laodong.vn'>Laodong.vn</option>
                        <option value='Vnexpress.vn'>Vnexpress</option>
                        <option value='Nguoilambao.vn'>Nguoilambao.vn</option>
                        <option value='Thanhnien.vn'>Thanhnien.vn</option>
                        </select>
            
            <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" name='url' onChange={onInputChange} value={url.url}/>
                <label for="floatingInput">Url</label>
            </div>
            
            <button class="btn btn-primary" onClick={UpdateUrl(url._id,url)}>Lưu thay đổi</button>
            </form>
            </div>
            </div>
        )
    
}
 export default UpdateUrl;