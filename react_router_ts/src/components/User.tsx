import React from 'react';

export default (props : any) => {
    console.log(props.children);
    return(
        <div>
            User
            {props.children}
        </div>
    )
}