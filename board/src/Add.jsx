import React from 'react';
import ReactDom from 'react-dom';

export default class Add extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            msg:''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();

        this.props.addMsgs(this.state);
        this.setState({
            name: '',
            msg:''
        });
    }

    handleNameChange(event){
        const name = event.target.value;
        this.setState({name});
    }

    handleChange(event){
        const msg = event.target.value;
        this.setState({msg});
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                用戶名:
                <br/>
                <input type="text" onChange={this.handleNameChange} value={this.state.name}/>
                <br/>
                留言:
                <br/>
                <input type="text" onChange={this.handleChange} value={this.state.msg}/>
                <br/>
                <input type='submit'></input>
            </form>
        )
    }
}