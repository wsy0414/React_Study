import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props : any) => {
    // const handleClick = () =>{
    //     props.history.replace("/user");
    // }

    return(
        <div>
            <p>Home</p>
            <button onClick = {() => {props.history.replace("/user");}}>去User</button>
        </div>
    )
}