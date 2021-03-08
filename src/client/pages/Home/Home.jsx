import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../../redux/actions'
import { getPostsFetchingState, getPosts } from '../../../redux/selectors'

const Home = () => {
  const dispatch = useDispatch()
  const posts = useSelector(getPosts)
  const isFetcing = useSelector(getPostsFetchingState)

  // useEffect doesn't runs on the server
  useEffect(() => {
    // Note: we can try to optimize this line
    // (check somehow if data was fetched by server and if so - don't make request from client).
    dispatch(fetchPosts())
  }, [])

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
        {isFetcing && <h3>Loading...</h3>}
      </div>
    </div>
  )
}

export default Home
