import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
        <body>
        <div class="container-fluid">
            <div class="row">
                <nav id="sidebarMenu " class="start-0 col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse">
                    <div class="position-fixed start-0 pt-3 col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse vh-100 ">
                        <ul class="nav flex-column ">
                          <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/admin">
                              <span class="icon"><i class="fa fa-home" aria-hidden="true"></i></span> Trang chủ
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/admin">
                              <span class="icon"></span> 
                            </a>
                          </li>
                          <li class="nav-item">
                            <Link to={'/'} class="nav-link text-light"  >
                              <span class="icon"><i class="fa fa-home" aria-hidden="true"></i></span> Trang chủ
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link to={"/category"} class="nav-link text-light">
                              <span class="icon"><i class="fa fa-file-text " aria-hidden="true"></i>  </span>
                              Quản lý chuyên mục
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link to={"/news"} class="nav-link text-light" >
                              <span class="icon"><i class="fa fa-newspaper-o" aria-hidden="true"></i>  </span>
                              Các bài báo
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link to={'/crawl'} class="nav-link text-light">
                              <span class="icon"><i class="fa fa-database" aria-hidden="true"></i>  </span>
                              Thu thập thủ công
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link to={'/users'} class="nav-link text-light" >
                              <span class="icon"><i class="fa fa-user-circle-o" aria-hidden="true"></i>  </span>
                              Người đăng ký
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link to={'/static'} class="nav-link text-light">
                              <span class="icon"><i class="fa fa-mouse-pointer" aria-hidden="true"></i> </span>
                              Quản lý nguồn
                            </Link>
                          </li>
                          
                        </ul>
                        </div>
                </nav>
            
            </div>
        </div>
        
    </body>
    );
  }
}