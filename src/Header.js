import React from 'react'

export default function () {
    return (
        <header>
            <div className='kartinka'>
                <img src="burgerking.png" width={100} />
            </div>
            <div className='s'>
                <a href="/main">Home</a>
            </div>
            <div className='a'>
                <a href="/friends">Friends</a>
            </div>
            <div className='b'>
                <a href="/profile">Profile</a>
            </div>
        </header>
    )
}
