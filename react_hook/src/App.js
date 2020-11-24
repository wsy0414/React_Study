import {useState, useEffect} from 'react'

const userSet = ['Ivan', 'Elvis', 'jack', 'Iris'];

export default () =>{
    const [user, setUser] = useState(userSet[0]);

    useEffect(() => {
      document.title = "Hi  " + user;
    });
  
    return(
      <div>
        Hello {user}
        <button onClick = {() => {setUser(userSet[Math.floor(Math.random() * userSet.length)])}}>change</button>
      </div>
    )  
}
