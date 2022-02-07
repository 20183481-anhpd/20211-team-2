import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';

export default function NavBar() {

    return (
        <div className="navbar">
            <div className="navbar-navbar">
                <div className="align">
                    <nav>
                        <ul>
                            <li>
                                <div>
                                    <Link to="/" >
                                        <span>Mới</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to={"/category/thoi-su"}>
                                        <span>Thời sự</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to={"/category/the-gioi"}>
                                        <span>Thế giới</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to={"/category/kinh-te"}>
                                        <span>Kinh tế</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to={"/category/giai-tri"}>
                                        <span>Giải trí</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to={"/category/the-thao"}>
                                        <span>Thể thao</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to={"/category/giao-duc"}>
                                        <span>Giáo dục</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to={"/category/suc-khoe"}>
                                        <span>Sức khỏe</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to={"/category/doi-song"}>
                                        <span>Đời sống</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to={"/category/phap-luat"}>
                                        <span>Pháp luật</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to={"/category/du-lich"}>
                                        <span>Du lịch</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to={"/category/khoa-hoc"}>
                                        <span>Khoa học</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to={"/category/cong-nghe"}>
                                        <span>Công nghệ</span>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}