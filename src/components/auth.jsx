import { useEffect, useState } from "react";

let listUsers

const Auth = () => {

    const [userNameValue, setUserNameValue] = useState('')
    const [userPasswordValue, setUserPasswordValue] = useState('')

    const [users, setUsers] = useState([])

    useEffect(() => {
        if(localStorage.getItem('users') == null) {
            localStorage.setItem('users', JSON.stringify([]))
        }
        
        setUsers(JSON.parse(localStorage.getItem('users')))
        listUsers = JSON.parse(localStorage.getItem("users"))
    }, [])

    const setUserToLocalHost = () => {
        localStorage.setItem('username', userNameValue)
    }

    return(
        <div className="App">
            <br/>
            <label>Your name:</label>
            <input
                placeholder="Name"
                value={userNameValue}
                onChange={(event) => {
                    setUserNameValue(event.target.value)
                }}
            />
            <input
                placeholder="Password"
                value={userPasswordValue}
                onChange={(event) => {
                    setUserPasswordValue(event.target.value)
                }}
            />
            <br/><br/>
            <button onClick={() => {
                users.map((el) => {
                    if (el[0] == userNameValue && el[1] == userPasswordValue) {
                        localStorage.setItem('username', userNameValue)
                        localStorage.setItem('isAuth', true) 
                    }
                })
                window.location.reload(false)
            }}>Войти</button> 
            <button onClick={() => {
                listUsers.push([userNameValue, userPasswordValue])
                localStorage.setItem('users', JSON.stringify(listUsers))
                localStorage.setItem('username', userNameValue)
                localStorage.setItem('isAuth', true) 
                window.location.reload(false)
            }}>Зарегистрироваться</button>
        </div>
    )
};

export default Auth;