
const Footer = ({length}) => {   
    
    const today = new Date();

    return (
        <footer>
            <p>{length} List {length === 1 ? "item" : "items"}</p>
            <small><p>Copyright &copy; {today.getFullYear()}</p></small>
        </footer>
    )
}

export default Footer
