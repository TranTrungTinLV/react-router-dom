import React from 'react'

function Auth({children}) {
    const isLogin = false;
    if(!isLogin) return <h1 style={{color: 'red'}}>Aceess Denied</h1>
    return (
    <div>
        {children}
    </div>
)
}

export default Auth;