import React from 'react';
import ReactDOM from 'react-dom';
//import Axios from 'axios';

class MyComponent extends React.Component{
  state = {
    name : ''
  };

  //箭頭函式會綁定this
  componentDidMount(){
    // Axios.get("https://api.github.com/search/repositories?q=r&sort=stars")
    //   .then(response => {
    //     const result = response.data;
    //     const {name} = result.items[0];
        
    //     this.setState({name});
    //   })

    fetch("https://api.github.com/search/repositories?q=r&sort=stars")
      .then(response => {
        return response.json()
      }).then(data => {
        const {name} = data.items[0];
        console.log(name);

        this.setState({name});
      })
      
  }

  render(){
    const data = this.state.name;
    if(!data){
      return(
        <div>
          <h1>loading...</h1>
        </div>
      )
    }else{
      return(
      <h1>is {data}!</h1>
      )
    }
  }
}

ReactDOM.render(
  <MyComponent />,
  document.getElementById('root')
);

