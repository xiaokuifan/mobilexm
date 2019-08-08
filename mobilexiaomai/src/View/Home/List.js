import React, { Component } from 'react';
import list from "./List.module.css";

export default class List extends Component {
    constructor(props){
        super(props)
        this.state={
            listdata:[
                {imgurl:"",name:"演唱会"},
                {imgurl:"",name:"演唱会"},
                {imgurl:"",name:"演唱会"},
                {imgurl:"",name:"演唱会"},
                {imgurl:"",name:"演唱会"},
                {imgurl:"",name:"演唱会"},
                {imgurl:"",name:"演唱会"},
                {imgurl:"",name:"演唱会"},
                {imgurl:"",name:"演唱会"},
                {imgurl:"",name:"演唱会"}
            ]
        }
    }
    render() {
        return (
            <div className={list.list}>
                {this.state.listdata.map((l,ind)=>{
                    <div className={list.listbox} key={ind}>
                        <div className={list.listimg}><img src={l.imgurl} className={list.listimgi}/></div>
                        <div className={list.listd}>{l.des}</div>
                    </div>
                })}
            </div>
        )
    }
}
