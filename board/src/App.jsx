import React from 'react';
import ReactDom from 'react-dom';
import Add from './Add';
import List from './List';

export default class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            msgs: [
                {
                    name: 'Ivan',
                    msg: 'React好難'
                },{
                    name: 'Chen',
                    msg: '想睡覺'
                }
            ]
        }

        this.addMsgs = this.addMsgs.bind(this);
        this.deleteMsgs = this.deleteMsgs.bind(this);
    }

    addMsgs(msg){
        const msgs = this.state.msgs;
        console.log(msg);
        msgs.push(msg);
        this.setState(msgs);
    }

    deleteMsgs(index){
        const msgs = this.state.msgs;
        msgs.splice(index, 1);
        this.setState(msgs);
    }

    render(){
        return(
            <div>
                <Add addMsgs = {this.addMsgs}/>
                <List msgs = {this.state.msgs} deleteMsgs = {this.deleteMsgs}/>
            </div>
        )
    }
}