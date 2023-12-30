import React from 'react'
import Profile from './Profile'

export default function Profiles(props) {
  
    let profileElement = props.data.users.map(p => {
        return  <Profile login = {p.login} name = {p.name}/>
    })
      
  
    return (
    <div>
        {profileElement}
    </div>
  )
}
