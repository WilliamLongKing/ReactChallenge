// import statements
import {React, useEffect, useState} from "react"

const Home = (props) => {

    // props and state variables
    // username passed in from login
    const {username} = props
    const [users, setUsers] = useState([]);

    // GET request from JSON Placeholder
    const getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                console.log("hello?")
                console.log(json)
                setUsers(json);
                console.log(users);
        });
    };
    
    useEffect(() => {
        getUsers();
    }, []);

    // create table based on user JSON data
    return <div className={"welcome"}>
        <div className={"header"}>
            <div>Welcome, {username}!</div>
        </div>
        <div className={"userTable"}>
            <table className={"users"}>
                <tr>
                    <th>name</th>
                    <th>email</th>
                    <th>user name</th>
                </tr>
                {users.map((user) => (
                    <tr >
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                    </tr>
        ))}
            </table>
        </div>
    </div>
}

export default Home