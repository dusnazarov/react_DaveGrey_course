import NewPost from "./components/NewPost";
import Missing from "./components/Missing";
import PostPage from "./components/PostPage";
import Home from "./components/Home"; 
import About from "./components/About";
import Layout from "./layout/Layout";
import {useState, useEffect} from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { format } from 'date-fns'
import api from './api/posts';
import EditPost from "./components/EditPost";
import useWindowSize from "./hooks/useWindowSize";





export default function App() {
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [postTitle, setPostTiltle] = useState('');
    const [postBody, setPostBody] = useState('');
    const [editTitle, setEditTiltle] = useState('');
    const [editBody, setEditBody] = useState('');
    const navigate = useNavigate(); 
    const {width} = useWindowSize();

    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await api.get('/posts');
          setPosts(response.data);
          
        } catch (err) {
          if (err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
          } else {
            console.log(`Error: ${err.message}`)
          }
        }
      }
      fetchPosts();
    }, []);


    useEffect(() => {
      const filteredResults = posts.filter(post => 
        ((post.body).toLowerCase()).includes(search.toLowerCase())
        || ((post.title).toLowerCase()).includes(search.toLowerCase()));

        setSearchResults(filteredResults.reverse());

    }, [posts, search])

  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
      const datetime = format(new Date(), 'MMMM dd, yyyy pp');
      const newPost = {id, title: postTitle, datetime, body: postBody };      
        
      try {
        const response = await api.post('/posts', newPost)
        const allPosts = [...posts, response.data];      
        setPosts(allPosts);
        setPostTiltle('');
        setPostBody('');
        navigate('/');  

      } catch (err) {
        console.log(`Error: ${err.message}`);
      }          
    }

    const handleDelete = async (id) => {
      
      try {
        await api.delete(`/posts/${id}`)
        const postsList = posts.filter(post => post.id !== id);
        setPosts(postsList);      
        navigate("/");

      } catch (err) {
        console.log(`Error: ${err.message}`);
      }    
    }   

    const handleEdit = async (id) => {
      const datetime = format(new Date(), 'MMMM dd, yyyy pp');
      const updatedPost = {id, title: editTitle, datetime, body: editBody }; 
      try {
        const response = await api.put(`/posts/${id}`, updatedPost);
        setPosts(posts.map(post => post.id === id ? {...response.data } : post));
        setEditTiltle('');
        setEditBody('');
        navigate("/");

      } catch (err) {
        console.log(`Error: ${err.message}`);
      }   
    }
    return (        
      <Routes>
        <Route path="/" element={
          <Layout
            search={search}
            setSearch={setSearch}
            width={width}
          />}
        >
          <Route index element={
            <Home
              posts={searchResults }
            />}
          />          
          <Route path="post">
            <Route index element={
              <NewPost
                handleSubmit={handleSubmit}
                postTitle={postTitle}
                setPostTitle={setPostTiltle}
                postBody={postBody}
                setPostBody={setPostBody}
              />}
            />
            
            <Route path="/post/:id" element={
              <PostPage
                posts={posts}    
                handleDelete={handleDelete}    
              />}
            />             
          </Route>
          <Route path="/edit/:id" element={
              <EditPost
                posts={posts}
                handleEdit={handleEdit}
                editTitle={editTitle}
                setEditTitle={setEditTiltle}
                editBody={editBody}
                setEditBody={setEditBody}
              />}
            />                
                      
          < Route path="about" element={<About />}/>
          < Route path="*" element={<Missing />}/>
        </Route>           
      </Routes>                
  );        
};













