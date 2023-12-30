import React from 'react'
import Friend from './Friend'

export default function Friends(props) {

  let FriendElement = props.data.friends.map(p => {
    return <Friend login={p.login} name={p.name} />
  }
  )

  return (
    <div>
      {FriendElement}
    </div>
  )
}
