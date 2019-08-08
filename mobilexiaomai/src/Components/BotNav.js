import React, { Component } from 'react';
import botnav from './BotNav.module.css';

export default class BotNav extends Component {
    render() {
        return (
            <div className={botnav.botnav}>
               <div className={botnav.buto}>首页</div>
               <div className={botnav.buto}>票夹</div>
               <div className={botnav.buto}>我的主页</div>
            </div>
        )
    }
}
