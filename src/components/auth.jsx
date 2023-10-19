import { useState, useEffect } from "react";

const Auth = () => {

    const [userNameValue, setUserNameValue] = useState('')

    const setUserToLocalHost = () => {
        localStorage.setItem('username', userNameValue)
    }

    return(
        <>
            <label>Your name:</label>
            <input
                value={userNameValue}
                onChange={(event) => {
                    setUserNameValue(event.target.value)
                }}
            />
            <button onClick={() => {
                setUserToLocalHost()
                window.location.reload(false)
            }}>OK</button>
        </>
    )
};

export default Auth;