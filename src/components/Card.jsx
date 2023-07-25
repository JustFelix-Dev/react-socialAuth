import React from 'react'

const Card = ({post}) => {
  return (
           <>
             <span className="title">{post.title}</span>
             <img src={post.img} alt="" className='img' />
             <p className="desc">{post.dec}</p>
             <button className='cardButton'>Read More</button>
           </>
  )
}

export default Card
