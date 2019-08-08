import React, { Component } from 'react';
import topnav from "./TopNav.module.css";

export default class TopNav extends Component {
    render() {
        return (
            <div className={topnav.topnav}>
                <div className={topnav.left}>
                <img src="" className={topnav.lefti}/>   
                </div>

                <div className={topnav.search}>
                 <div className={topnav.searchl}>
                 <img src="" className={topnav.searchli}/>
                 </div>
                 <div className={topnav.searchr}>
                <input type="text" className={topnav.searchri}/>
                 </div>
                </div>

                <div className={topnav.right}>登录|注册</div>
            </div>
        )
    }
}
