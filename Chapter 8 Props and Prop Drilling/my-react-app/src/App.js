import React, {useState} from  "react"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import Content from "./components/Content"


export default function App() {
    const [items, setItems ] = useState([
        {
            id : 1,
            checked: true,
            item : 'Item 1',           
        },
        {
            id : 2,
            checked: false,
            item : 'Item 2',        
        },       
        {
            id : 3,
            checked: false,
            item : 'Item 3',      
        
        }                
    ]);
   
    
    const handleCheck = (x) => {     
        const listItems = items.map((item) => item.id === x ? { ...item, checked: !item.checked } : item );       
        setItems(listItems);
        console.log(listItems)        
            
        localStorage.setItem("shoppinglist", JSON.stringify(listItems));
    }

    const handleDelete = (x) => {
        const listItems = items.filter((item) => item.id !== x);
        setItems(listItems);
        localStorage.setItem("shoppinglist", JSON.stringify(listItems));        
    }

    return (
        <div className="App">          
            <Header title="Groceries List"/>
            <Content 
                items={items}               
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />
            <Footer length={items.length}/>           
        </div>
    );    
};







