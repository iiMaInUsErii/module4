import { useState } from "react";

let msgList = []

const Chat = () => {

    const [message, setMessage] = useState('')

    const [chat, setChat] = useState([])

    return (
        <>
            <div className="chat">
                {chat.join('\n')}
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
                        msgList.push((localStorage.getItem('username') + ": " + message))
                        setChat(msgList)
                        setMessage('')
                    }}
                >Send</button>
                <button
                    onClick={() => {
                        msgList.pop()
                        setChat(msgList)
                    }}
                >Delete</button>
            </div>
        </>
    )
}

export default Chat;