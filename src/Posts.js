import React, { useState } from 'react'
import Post from './Post'

export default function Posts(props) {

  let posts_ref = React.createRef()

  function hide() {
    posts_ref.current.style.display = "none"
  }

  function pokazat() {
    posts_ref.current.style.display = "block"
  }

  function deletePost(post_id) {
    setPosts(posts_data.filter(p => p.id != post_id))
  }

  let postData = props.posts

  const [posts_data, setPosts] = useState(postData)
  const [text, setText] = useState("")
  const [postTitle, setTitle] = useState("")

  const addNewPost = () => {
    const newPost = {
      id: Date.now(),
      text,
      postTitle
    }
    setPosts([...posts_data, newPost])
    setText("")
    setTitle("")
  }

  let postElement = posts_data.map(p => {
    return <Post id={p.id} postTitle={p.postTitle} text={p.text} deletePost={deletePost} />
  })

  let img_ref = React.createRef()

  function otpravit() {
    img_ref.current.style.backgroundColor = "green"
    img_ref.current.innerHTML = "Отправить"
    img_ref.current.style.color = "white"
  }

  function dobavit() {
    img_ref.current.style.backgroundColor = "red"
    img_ref.current.innerHTML = "Добавить"
    img_ref.current.style.borderRadius = "20px"
    img_ref.current.style.color = "white"
  }

  function joltiy() {
    img_ref.current.style.backgroundColor = "yellow"
    img_ref.current.style.innerHTML = "Отправленно"
    img_ref.current.style.color = "black"
  }

  return (
    <div>
      <div>
        <button onClick={hide} className='spryatat'>Спрятать</button>
        <button onClick={pokazat} className='pokazat'>Показать</button>
      </div>
      <form>
        <div className="form-post">
          <div className="form-input1">
            <input type="text" value={postTitle} onChange={e => setTitle(e.target.value)} placeholder="Название поста" />
          </div>
          <div className="form-input">
            <textarea type="text" value={text} onChange={e => setText(e.target.value)} placeholder='Текст поста'></textarea>
          </div>
          <div>
            <button type="button" onClick={addNewPost}  className='knopka'>Добавить</button>
          </div>
        </div>
      </form>
      <div ref={posts_ref} className='postelement'>
        {postElement}
      </div>
    </div>
  )
}
