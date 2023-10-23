import { useEffect, useState } from "react";

let listMsg

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
        }
        
        setChat(JSON.parse(localStorage.getItem('msg')))
        listMsg = JSON.parse(localStorage.getItem("msg"))
    }, [])

    return (
        <>
            {localStorage.getItem('isAuth') != null ?
            <>
                <div if className="chat">
                    {chat.map((el, key) => (
                        <div key={key} className="message">
                            <div className="user">
                                { el.user }: 
                                <button
                                    onClick={() => {
                                        listMsg.splice(key, 1)
                                        localStorage.setItem("msg", JSON.stringify(listMsg))
                                        listMsg = JSON.parse(localStorage.getItem("msg"))
                                        infoMsg.message = ""
                                        setChat(JSON.parse(localStorage.getItem('msg')))
                                    }}><i className="bi bi-trash"></i>
                                </button>
                            </div>
                            <div className="message">
                                { el.message }
                            </div>
                        </div>
                    ))}
                </div>

                <br/>

                <div className="inputMessage">
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
                    }}><i className="bi bi-send"></i></button>
                    {/* <button onClick={() => {
                        listMsg.pop()
                        localStorage.setItem("msg", JSON.stringify(listMsg))
                        listMsg = JSON.parse(localStorage.getItem("msg"))
                        infoMsg.message = ""
                        setChat(JSON.parse(localStorage.getItem('msg')))
                    }}><i className="bi bi-trash"></i></button> */}
                </div>
            </> : 'Войдите'}
        </>
    )
}

export default Chat;