import React, { useState } from 'react'

export default function Post(props) {



  const [Likes, setLikes] = useState(0)
  const [Dislikes, setDislikes] = useState(0)

  function like() {
    setLikes(Likes + 1)
  }

  function dislike() {
    setDislikes(Dislikes + 1)
  }

  // function del() {
  //   props.deletePost(props.id)
  // }

  return (
    <div className='post'>
        <div className='zagolovok'><h1>{props.postTitle}</h1></div>
        <p>{props.text}</p>
        <div className='otzivi'>
        <div className='like1'><h1>Likes: {Likes}</h1></div>
        <div className='dislike1'><h1>DisLikes: {Dislikes}</h1></div>
        </div>
        <div className='knopki1'>
        <button onClick={like} className='like'>Like post</button>
        <button onClick={dislike} className='dislike'>DisLike post</button>
        <button onClick={()=> props.deletePost(props.id)} className='nepokazivat'>Не показывать</button>
        </div>        
    </div>
  )
}
