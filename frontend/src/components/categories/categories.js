import React, { Component, useState, useEffect}from 'react';
import './categories.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const [category, setcategory] = useState("");
  const [categories, setcategories] = useState([])
  useEffect(() =>{
    axios.get('http://localhost:3000/categories').then((response)=>{
      setcategories(response.data);
  })
  },[categories])
  //add a new topic
   const addCategory = () =>{
     console.log(category)
     axios.post('http://localhost:3000/categories',{category: category});
     setcategories([...categories,{category: category} ])
   }
   const onInputChange = event => {
    const { value, name } = event.target
    setcategory({ ...category, [name]: value })
};
  const updateCategory = (id) =>{
    const newCategory = prompt("Nhập tên chuyên mục muốn thay đổi: ");
    axios.put("http://localhost:3000/updatecategory", {
      id: id,
      newCategory: newCategory
    }).then(() => {
      setcategories(
        categories.map((val) => {
          return val._id == id ? { _id: id, category: val.newCategory} : val;
        })
      );
    });
   }
   //Delete topic
   const deleteCategory = async (id) =>{
     await axios.delete(`http://localhost:3000/delete/${id}`);    
   }
   //UI
        return (
            <div className="container">
            <div className="py-4" >
            <h4 class = "text-success">Điền form dưới đây để thêm chuyên mục</h4>
            <form>
                <div class="input-group flex-nowrap shadow" id='them' >
                    <span class="input-group-text" id="addon-wrapping">Tên chuyên mục  </span>
                    <input class="form-control" onChange={(event) => setcategory(event.target.value)}  placeholder="Nhập tên chuyên mục muốn thêm "/>
                    <button class="btn btn-primary" onClick={addCategory}>Thêm</button>
                </div> 
            </form>
            <h4 class = "text-success">Danh sách các chuyên mục</h4>
              <div>   
              <div class="admin-subcontent table-responsive">
                    <table class="table table-striped table-sm" id="table-xe">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Tên chuyên mục</th>
                                <th scope="col">Các bài báo</th>                                           
                                <th scope="col">Action</th>           
                            </tr>
                        </thead>
                        <tbody> 
                      {                      
                        categories.map((val, key) => {
                          return(  
                                  <tr>
                                      <td>{key+1}</td>
                                      <td >{val.category}</td>
                                      <td><Link to={`/category/${val._id}`} class='btn btn-primary'>Xem</Link></td>
                                      <td><a class="btn btn-primary" onClick={() => updateCategory(val._id)} type="button"  ><i class="fa fa-pencil"></i> </a>
                                      <a>  </a>                           
                                      <a class="btn btn-danger" onClick={() => deleteCategory(val._id)}  type="button" ><i class="fa fa-trash"></i></a></td>          
                                  </tr>
                          )
                        } 
                      )
                      }                       
                        </tbody>
                    </table>                               
              </div>
              </div>
              </div>
              </div>
        )
       
    }
export default Categories;
