import NewPost from "./components/NewPost";
import Missing from "./components/Missing";
import PostPage from "./components/PostPage";
import Home from "./components/Home"; 
import About from "./components/About";
import Layout from "./layout/Layout";
import {useState, useEffect} from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { format } from 'date-fns'



export default function App() {
    const [posts, setPosts] = useState([
        {
          id: 1,
          title: "My First Post",
          datetime: "July 01, 2021 11:17:36 AM",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
        },
        {
          id: 2,
          title: "My 2nd Post",
          datetime: "July 01, 2021 11:17:36 AM",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
        },
        {
          id: 3,
          title: "My 3rd Post",
          datetime: "July 01, 2021 11:17:36 AM",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
        },
        {
          id: 4,
          title: "My Fourth Post",
          datetime: "July 01, 2021 11:17:36 AM",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
        }
      ])

    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [postTitle, setPostTiltle] = useState('');
    const [postBody, setPostBody] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
      const filteredResults = posts.filter(post => 
        ((post.body).toLowerCase()).includes(search.toLowerCase())
        || ((post.title).toLowerCase()).includes(search.toLowerCase()));

        setSearchResults(filteredResults.reverse());

    }, [posts, search])

    const handleDelete = (id) => {
      const postsList = posts.filter(post => post.id !== id);
      setPosts(postsList);      
      navigate("/");

    }

    const handleSubmit = (e) => {
      e.preventDefault();
      const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
      const datetime = format(new Date(), 'MMMM dd, yyyy pp');
      const newPost = {id, title: postTitle, datetime, body: postBody };
      const allPosts = [...posts, newPost ];
      setPosts(allPosts);
      setPostTiltle('');
      setPostBody('');
      navigate('/');

    }
     
    return (        
        <Routes>
          <Route path="/" element={<Layout
            search={search}
            setSearch={setSearch}
           
          />}>
            <Route index element={<Home
              posts={searchResults }/>
            }/>          
            <Route path="post">
              <Route index element={<NewPost
                handleSubmit={handleSubmit}
                postTitle={postTitle}
                setPostTitle={setPostTiltle}
                postBody={postBody}
                setPostBody={setPostBody}
              />} />
              <Route path="/post/:id" element={<PostPage
                posts={posts}    
                handleDelete={handleDelete}    
              />}/>    
            </Route>            
            < Route path="about" element={<About />}/>
            < Route path="*" element={<Missing />}/>
          </Route>           
        </Routes>                
    );        
}












