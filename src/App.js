import React, { useState } from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import './styles/App.css';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: '3', body: '1' },
    { id: 2, title: '2', body: '2' },
    { id: 3, title: '1', body: '3' }
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <Counter />
      <ClassCounter />
      <PostItem post={{ id: 0, title: 'Javascript', body: 'Description' }} />
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue={'Sorting'}
          options={[
            {value: 'title', name: 'By name'},
            {value: 'body', name: 'By description'},
          ]}
        />
      </div>

      {/* Условная отрисовка */}
      {posts.length !== 0 
        ? <PostList remove={removePost} posts={posts} title='Post List 1' />
        : <h1 style={{textAlign: 'center'}}>
            No posts
          </h1>
      }
    </div>
  );
}

export default App;
