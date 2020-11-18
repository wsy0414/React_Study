import react from 'react';

export default class App extends react.Component{
    increment = () =>{
        const number = this.select.value*1; //型別轉換

        console.log('increment');

        this.props.store.dispatch({type: 'increment', data: number})

        // const newNum = this.state.number + number;

        // this.setState({number : newNum});
    }

    decrement = () =>{
        const number = this.select.value*1; //型別轉換

        this.props.store.dispatch({type: 'decrement', data: number})
        // const newNum = this.state.number - number;

        // this.setState({number : newNum});
    }

    incrementIfOdd = () =>{
        const number = this.select.value*1; //型別轉換
        const num = this.props.store.getState();
        if(num%2 === 1){
            this.props.store.dispatch({type: 'increment', data: number})

            // const newNum = this.state.number + number;

            // this.setState({number : newNum});
        }

        
    }

    incrementAsync = () =>{
        const number = this.select.value*1; //型別轉換

        // const newNum = this.state.number + number;

        setTimeout(() => {
            this.props.store.dispatch({type: 'increment', data: number})
            //this.setState({number : newNum});
        }, 1000);

        
    }

    render(){
        const count = this.props.store.getState();
        return(
            <div>
                <p>click {count} times</p>
                <select ref = {select => this.select = select}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick = {this.increment}>+</button>
                <button onClick = {this.decrement}>-</button>
                <button onClick = {this.incrementIfOdd}>increment if odd</button>
                <button onClick = {this.incrementAsync}>decrement async</button>
            </div>
        )
    }
}