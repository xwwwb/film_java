import { useState } from "react";
import "./index.css";
import logo from "../../assets/logo.png";
import defaultAvator from "../../assets/avator.png";
import api from "../../api";
import { createRef } from "react";

export default function Header() {
  const [menuItem, setMenuItem] = useState([
    { name: "首页", url: "/", active: true },
    { name: "电影", url: "jsp/movieList.jsp", active: false },
  ]);
  const searchRef = createRef<HTMLInputElement>();

  const onSearch = ()=>{
    const keyWord = searchRef.current.value;
    const url = api + "jsp/movieList.jsp?searchMovie="+keyWord;
    window.location.href = url;
  }

  return (
    <div id="header">
      <div className="header-left">
        <div className="logo">
          <img src={logo} height="40px" alt="" />
        </div>
        <div className="menu">
          {menuItem.map((item, index) => {
            return (
              <div
                key={index}
                className={item.active ? "active" : ""}
                onClick={() => {
                  window.location.href = item.url === "/" ? "/" : api+ "/jsp/movieList.jsp";
                }}
              >
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
      <div className="header-right">
        <div className="search">
          <input type="text" onKeyDown={(e)=>{
            if(e.keyCode === 13){
              onSearch();
            }
          }}  ref={searchRef} />
        </div>
        <div className="user" onClick={()=>{
          window.location.href = api+"jsp/login.jsp"
        }} >
          <img src={defaultAvator} alt="" />
        </div>
      </div>
    </div>
  );
}
