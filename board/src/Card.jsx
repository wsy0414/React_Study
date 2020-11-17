import React from 'react';
import ReactDom from 'react-dom';

export default class Card extends React.Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        const {index} = this.props;
        this.props.deleteMsgs({index});
    }

    render(){
        const msgs = this.props.msgs;
        return(
            <div>
                <h2>{msgs.name}說:</h2>
                <h3>{msgs.msg}</h3>
                <button onClick = {this.handleClick}>刪除</button>
            </div>
        )
    }
}