import React from 'react'
import Posts from './Posts'


export default function Main(props) {
  
  return (
    <main>
      <Posts posts={props.data.posts}/>
    </main>
  )
}
/* <div className='glav'>
<div className='kartinka0'>
  <img src="Без названия (1).jfif" width={200} />
</div>
<div>
  <a href="" className='kup'>Купить 300тг</a>
</div>
</div>
<div className='glav1'>
<div className='kartinkа1'>
  <img src="Без названия (2).jfif" width={200} />
</div>
<div>
  <a href="" className='kup0'>Купить 900тг</a>
</div>
</div>
<div className='glav2'>
<div className='kartinka2'>
  <img src="Без названия.jfif" width={200} />
</div>
<div>
  <a href="" className='kup1'>Купить 500тг</a>
</div>
</div> */