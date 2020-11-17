import React from 'react'
import Home from './home'
import MyNav from './MyNav'
import Person from './Person'
import PropTypes from 'prop-types'

// export default class App extends React.Component
class App extends React.Component{    
    render(){
        // const nav1 = ["1", "2", "3"];
        // const nav2 = ["一", "二", "三"];
        // console.log(this);
        // return(
        //     <div>
        //         <h1>hello react app</h1>
        //         <Home />
        //         <MyNav nav = {nav1}/>
        //         <MyNav nav = {nav2}/>
        //     </div>
        // ) 

        Person.propTypes = {
            name:PropTypes.string.isRequired,
            age:PropTypes.number
        }
        Person.defaultProps={
            age:18,
            sexy:'男'
        }
        return(
            <div>
                {
                    this.props.person.map((element) => <Person {...element} />)
                }
            </div>
        )
    }
}

export default App