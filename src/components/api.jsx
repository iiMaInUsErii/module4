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

            <div className={'App'}>
                <h3>{ data.title }</h3>
                <img
                    width={'40%'}
                    src={ data.url }
                    alt="APOD"
                />
                <p>{ data.explanation }</p>
            </div>
        </>
    )
};

export default API;