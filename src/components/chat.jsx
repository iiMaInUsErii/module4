import { useEffect, useState } from "react";

let listMsg = JSON.parse(localStorage.getItem("msg"))

let infoMsg = {
    user: (localStorage.getItem("username")), 
    message:'',
}

const Chat = () => {

    const [message, setMessage] = useState('')

    const [chat, setChat] = useState([])

    useEffect(() => {
        if(localStorage.getItem('msg') == null) {
            localStorage.setItem('msg', JSON.stringify([]))
            setChat(JSON.parse(localStorage.getItem('msg')))
        } else {
            setChat(JSON.parse(localStorage.getItem('msg')))
        }
    }, [])

    return (
        <>
            <div className="chat">
                {chat.map((el, key) => (
                    <div className="message">
                        <div className="user">
                            { el.user }:
                        </div>
                        <div className="message">
                            { el.message }
                            <button
                            onClick={() => {
                    listMsg.splice(key, 1)
                    localStorage.setItem("msg", JSON.stringify(listMsg))
                    listMsg = JSON.parse(localStorage.getItem("msg"))
                    infoMsg.message = ""
                    setChat(JSON.parse(localStorage.getItem('msg')))
                            }}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>

            <div class="inputMessage">
                <input
                    type="text"
                    placeholder="Введите сообщение"
                    value={message}
                    onChange={(event) => {
                        setMessage(event.target.value)
                    }}
                />
                <button onClick={() => {
                    infoMsg.message = message
                    listMsg.push(infoMsg)
                    localStorage.setItem("msg", JSON.stringify(listMsg))
                    listMsg = JSON.parse(localStorage.getItem("msg"))
                    infoMsg.message = ""
                    setChat(JSON.parse(localStorage.getItem('msg')))
                }}>Отправить</button>
                <button onClick={() => {
                    listMsg.pop()
                    localStorage.setItem("msg", JSON.stringify(listMsg))
                    listMsg = JSON.parse(localStorage.getItem("msg"))
                    infoMsg.message = ""
                    setChat(JSON.parse(localStorage.getItem('msg')))
                }}>Удалить</button>
            </div>
        </>
    )
}

export default Chat;