// import NewPost from "./components/NewPost";
// import Missing from "./components/Missing";
// import PostPage from "./components/PostPage";
// import Home from "./components/Home"; 
// import About from "./components/About";
// import { Route, Routes} from 'react-router-dom';
// import EditPost from "./components/EditPost";
// import {useEffect } from 'react'
// import useAxiosFetch from "./hooks/useAxiosFetch";
// import {useStoreActions} from 'easy-peasy'
// import Nav from "./layout/Nav";
// import Footer from "./layout/Footer";
// import Header from "./layout/Header";



// export default function App() {
//   const setPosts = useStoreActions((actions) => actions.setPosts)
//   const {data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');

//   useEffect(() => {
//     setPosts(data);
//   },[data, setPosts])
     
//   return (
//     <div className="App">
//       <Header title="React JS Blog" />
//       <Nav />
//       <Routes>
//         <Route index path="/">
//           <Home
//             isLoading={isLoading}
//             fetchError={fetchError}
//           />
//         </Route>
//         <Route index path="/post" element={<NewPost/>} />
//         <Route path="/edit/:id" element={<EditPost />} />
//         <Route path="/post/:id" element={<PostPage/>} />
//         <Route path="/about" element={<About/>} />
//         <Route path="*" element={<Missing/>} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// };


// import NewPost from "./components/NewPost";
// import Missing from "./components/Missing";
// import PostPage from "./components/PostPage";
// import Home from "./components/Home"; 
// import About from "./components/About";
// import { Route, Routes} from 'react-router-dom';
// import EditPost from "./components/EditPost";
// import {useEffect } from 'react'
// import useAxiosFetch from "./hooks/useAxiosFetch";
// import {useStoreActions} from 'easy-peasy'
// import Nav from "./layout/Nav";
// import Footer from "./layout/Footer";
// import Header from "./layout/Header";



// export default function App() {
//   const setPosts = useStoreActions((actions) => actions.setPosts)
//   const {data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');

//   useEffect(() => {
//     setPosts(data);
//   },[data, setPosts])
     
//   return (
//     <div className="App">
//       <Header title="React JS Blog" />
//       <Nav />
//       <Routes>
//         <Route index path="/" >
//           <Home
//             isLoading={isLoading}
//             fetchError={fetchError}
//           />    
          
//         </Route>
//         <Route index path="/post" element={<NewPost/>} />
//         <Route path="/edit/:id" element={<EditPost />} />
//         <Route path="/post/:id" element={<PostPage/>} />
//         <Route path="/about" element={<About/>} />
//         <Route path="*" element={<Missing/>} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// };

import NewPost from "./components/NewPost";
import Missing from "./components/Missing";
import PostPage from "./components/PostPage";
import Home from "./components/Home"; 
import About from "./components/About";
import Layout from "./layout/Layout";
import { Route, Routes} from 'react-router-dom';
import EditPost from "./components/EditPost";
import { useStoreActions } from 'easy-peasy';
import useAxiosFetch from './hooks/useAxiosFetch';
import { useEffect } from 'react';




export default function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts);
  const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');

  useEffect(() => {
    setPosts(data);
  }, [data, setPosts])
     
    return (      
            
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={
              <Home 
                isLoading={isLoading}
                fetchError={fetchError}
              />}
            /> 
            <Route path="post">
              <Route index element={<NewPost/>}/>
              <Route path="/post:id" element={<PostPage/>}/>             
            </Route>
            <Route path="/edit/:id" element={<EditPost/>}/>
            <Route path="about" element={<About />}/>
            <Route path="*" element={<Missing />}/>
          </Route>          
        </Routes>
                   
  );       
};





