import { Outlet } from 'react-router-dom'
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ search, setSearch }) => {
  return (
    <div className="App">
        <Header title="React JS Blog" />
        <Nav search={search} setSearch={setSearch} />
        <Outlet />
        <Footer /> 
    </div>
  )
}
export default Layout
