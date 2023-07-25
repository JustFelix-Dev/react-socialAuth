import React from 'react';
import { posts } from '../data';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
          <>
            <div>Home</div>
            {posts.map(post=>(
              <Link  className='link' to={`/post/${post.id}`}>
              <Card key={post.id} post={post}/>
              </Link>
            ))}
          </>
  )
}

export default Home
