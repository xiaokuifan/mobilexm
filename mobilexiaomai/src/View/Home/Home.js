import React, { Component } from 'react';
import TopNav from "../../Components/TopNav";
import BotNav from "../../Components/BotNav";
// import List from "./List";
// import Poster from "../../Components/Poster";
// import Swiper from "../../Components/Swiper";

export default class Home extends Component {
    render() {
        return (
            <div>
                <TopNav></TopNav>
                {/* <Swiper></Swiper>
                <List></List>
                <Poster></Poster>
                <Poster></Poster> */}
                <BotNav></BotNav>
            </div>
        )
    }
}
