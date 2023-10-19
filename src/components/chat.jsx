import { useState } from "react";

const Chat = () => {
    const [message, setMessage] = useState('')

    const [chat, setChat] = useState([])

    return (
        <>
            <div className="chat">
                {chat}
            </div>

            <div>
                <label>New message</label>
                <input
                    value={message}
                    onChange={(event) => {
                        setMessage(event.target.value)
                    }}
                />
                <button
                    onClick={() => {
                        setChat(...chat, localStorage.getItem('username') + ": " + message)
                        setMessage('')
                    }}
                >Send</button>
                <button
                    onClick={() => {
                        setChat('')
                    }}
                >Delete</button>
            </div>
        </>
    )
}

export default Chat;