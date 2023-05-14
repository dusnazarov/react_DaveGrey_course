import NewPost from "./components/NewPost";
import Missing from "./components/Missing";
import PostPage from "./components/PostPage";
import Home from "./components/Home"; 
import About from "./components/About";
import Layout from "./layout/Layout";
import { Route, Routes} from 'react-router-dom';
import EditPost from "./components/EditPost";
import { DataProvider } from "./context/DataContext";



export default function App() {
     
    return (      
      <DataProvider>        
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/> 
            <Route path="post">
              <Route index element={<NewPost/>}/>
              <Route path="/post/:id" element={<PostPage/>}/>             
            </Route>
            <Route path="/edit/:id" element={<EditPost/>}/>
            <Route path="about" element={<About />}/>
            <Route path="*" element={<Missing />}/>
          </Route>           
        </Routes>
      </DataProvider>                
  );        
};













