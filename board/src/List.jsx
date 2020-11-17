import React from 'react';
import ReactDom from 'react-dom';
import Card from './Card';

export default class List extends React.Component{
    render(){
        return(
            <ul>
                {this.props.msgs.map((element, index) => <li><Card msgs = {element} key={index} index={index} deleteMsgs = {this.props.deleteMsgs} /></li>)}
            </ul>
        )
    }
}