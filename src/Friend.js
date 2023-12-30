import React from 'react'

export default function Friend(props) {

    let img_ref = React.createRef()

    function Sizeimg() {
        img_ref.current.style.width = "220px"
    }

    function img() {
        img_ref.current.style.width = "150px"
    }
    return (
        <div>
            <main className='main'>
                <div className='profiles'>
                    <img ref={img_ref} onMouseEnter={Sizeimg} onMouseLeave={img} src='https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L3BmLWljb240LWppcjIwNjItcG9yLWwtam9iNzg4LnBuZw.png' className='img' width={150} />
                    <div className='div'>
                        <h1>{props.login}</h1>
                        <p>{props.name}</p>
                    </div>
                </div>
            </main>
        </div>
    )
}