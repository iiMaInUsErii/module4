const Welcome = () => {
    return (
        <>
            Привет {localStorage.getItem('username')}
            <br/>
            <button onClick={() => {
                localStorage.removeItem('username')
                window.location.reload(false)
            }}>Выйти</button>
        </>
    )
};

export default Welcome;