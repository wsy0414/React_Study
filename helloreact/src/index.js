import React from 'react'
import ReactDOM from 'react-dom'
//import App from './app'


//ReactDOM.render(<h1>Hello React</h1>, document.getElementById('root'));



// function tick() {
//     const element = (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));}
  
//setInterval(tick, 1000);

// const persons = [
//     {name: 'Ivan', age:22, sexy:'男'},
//     {name: 'Amy', age:18}
// ]


/**
 * 元件之間的交互應用
 */
// class App extends React.Component{
//     constructor(props){
//         super(props);

//         this.state = {
//             todos : ['111', '333', '222']
//         };

//         this.addTodo = this.addTodo.bind(this);
//     }

//     addTodo(todo){
//         const todos = this.state.todos;
//         todos.unshift(todo);
//         this.setState(todos);
//     }

//     render(){
//         return(
//             <div>
//                 <h1>Simple Todo List</h1>
//                 <Add addTodo = {this.addTodo}></Add>
//                 <List todos = {this.state.todos}></List>
//             </div>
//         )
//     }
// }

// class Add extends React.Component{
//     constructor(props){
//         super(props);

//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick(){
//         this.props.addTodo(this.refs.content.value);
//     }

//     render(){
//         return(
//             <div>
//                 <input ref='content'></input>
//                 <button onClick={this.handleClick}>add</button>
//             </div>
//         )
//     }
// }

// class List extends React.Component{
//     render(){
//         return(
//             <div>
//                 <ul>
//                     {this.props.todos.map((element) => <li>{element}</li>)}
//                 </ul>
//             </div>
//         )
//     }
// }

// class App extends React.Component{
//     constructor(props){
//         super(props);

//         this.state = {
//             pwd:''
//         };

//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleSubmit(event){
//         event.preventDefault();
//         const name = this.refs.name.value;
//         const pwd = this.state.pwd;
//         alert('帳號:' + name +'密碼:' + pwd);
//     }

//     handleChange(event){
//         const pwd = event.target.value;
//         this.setState({pwd});
//     }

//     /**
//      * 表單元件
//      * 1.受控元件:表單輸入時會自動更改狀態
//      * 2.非受控元件:需要時才讀取表單數據
//      */
//     render(){
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 帳號:<input type='text' ref='name'></input>
//                 密碼:<input type='password' onChange={this.handleChange} value={this.state.pwd}></input>  
//                 <input type='submit'></input>
//             </form>
//         )
//     }
// }

ReactDOM.render(<App/>, document.getElementById("root"));
  
  