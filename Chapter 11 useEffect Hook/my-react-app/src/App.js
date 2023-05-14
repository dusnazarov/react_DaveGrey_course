
import Header from "./layout/Header"
import Content from "./components/Content"
import Footer from "./layout/Footer"
import React, { useState, useEffect } from  "react"
import AddItem from "./components/AddItem"
import SearchItem from "./layout/SearchItem"


export default function App() {
    const [items, setItems ] = useState(JSON.parse(localStorage.getItem("shoppinglist")) || []);      

    const [newItem, setNewItem] = useState('')
    const [search, setSearch] = useState('')

    // // 1 - usul
    // console.log('component rendered')

    // useEffect(() => {
    //     console.log('render')
    // })

    // 2 - usul    
    // console.log('component rendered')
    // useEffect(() => {
    //    console.log('Loading ...') 
    // },[])

    //  // 3 - usul    
    // console.log('component rendered')
    // useEffect(() => {
    //    console.log('update imems states') 
    // },[items])

    //  //  // 4 - usul    
    // console.log('before useEffect')
    // useEffect(() => {
    //    console.log('inside useEffect') 
    // },[items])
    // console.log('after useEffect')

     //  // 5 - usul
    useEffect(() => {
        localStorage.setItem("shoppinglist", JSON.stringify(items))
    },[items])

    
    const addItem = (item) => {
        const id = items.length ? items[items.length- 1].id + 1 : 1;
        const myNewItem = {id, checked:false, item };
        const listItems = [...items, myNewItem]
        setItems(listItems);        
    }

    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked } :item);
        setItems(listItems);
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('submitted')
        // console.log(newItem)
        if (!newItem) return;
        addItem(newItem);        
        setNewItem('')   

    }
    
    return (
        <div className="App">          
            <Header title="Groceries List"/>            
            <AddItem 
                newItem={newItem}
                setNewItem={setNewItem}
                handleSubmit={handleSubmit}
            />
            <SearchItem
                search={search}
                setSearch={setSearch}
            />
            <Content 
                items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}               
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />
            
            <Footer length={items.length}/>           
        </div>
    );    
}





