import React from 'react'

export default class Preson extends React.Component{
    
    constructor(props){
        super(props)
        console.log(props)
    }

    render(){

        return(
            <div>
                <ul>
                    <li>姓名:{this.props.name}</li>
                    <li>性別:{this.props.sexy}</li>
                    <li>年齡:{this.props.age}</li>
                </ul>
            </div>
        )
    }
}