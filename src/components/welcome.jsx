const Welcome = () => {
    return (
        <div className={'App'}>
            <br/>
            <h3>Привет {localStorage.getItem('username')}</h3>
            <br/>
            <button onClick={() => {
                localStorage.removeItem('username')
                window.location.reload(false)
            }}>Выйти</button>
        </div>
    )
};

export default Welcome;