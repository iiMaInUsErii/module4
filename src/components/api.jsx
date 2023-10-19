import { useEffect, useState } from "react";

const API = () => {

    const [data, setData] = useState({})

    useEffect(() => {
        fetch('https://apod.ellanan.com/api')
        .then(res => res.json())
        .then(res => setData(res))
    }, [])

    return (
        <>
            <h1>API</h1>

            <div>
                <h3>{ data.title }</h3>
                <img
                    width={'100%'}
                    src={ data.url }
                    alt="APOD"
                />
                <p>{ data.explanation }</p>
            </div>

            API Response:
            <div className="code">
                <code>{ JSON.stringify(data) }</code>
            </div>
        </>
    )
};

export default API;