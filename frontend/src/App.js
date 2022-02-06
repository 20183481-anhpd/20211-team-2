import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route,Switch, Routes} from "react-router-dom";
import Navbar from "./components/navbar.component"
import SideBar from './components/sidebar.component';
import Categories from './components/categories/categories';
import NewsList from './components/article/article';
import UserList from './components/user/user';
import Url from './components/Url/url';
import Crawl from './components/crawl/crawl';
import Article from './components/article/viewarticle';
import UpdateUrl from './components/Url/updateUrl';
import Home from './components/Home/home';
import ArticleInC from './components/categories/article';
function App(props) {
  return (   
      <> <SideBar />
            <div className="App">
              <Navbar/>
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/category" element={<Categories />} />
                  <Route exact path="/category/:id" element={<ArticleInC />} />
                  <Route exact path="/news" element={<NewsList />} />
                  <Route exact path='/article/:id' element={<Article />} />
                  <Route exact path="/users" element={<UserList/>} />
                  <Route exact path="/crawl" element={<Crawl/>} />
                  <Route exact path="/static" element={<Url/>} />
                  <Route exact path='/url/:id' element={<UpdateUrl />} />
                </Routes>
             </div>
      </>
  
        
  );
}

export default App;