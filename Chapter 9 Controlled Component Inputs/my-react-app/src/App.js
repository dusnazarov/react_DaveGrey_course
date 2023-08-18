import React, { useState } from  "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Content from "./components/Content";
import AddItem from "./components/AddItem";
import SearchItem from "./layout/SearchItem"

// 1)  ///////////////////////////////////////////
// export default function App() {
//     const [items, setItems ] = useState([
//         {
//             id : 1,
//             checked: true,
//             item : 'Item 1'
//         },
//         {
//             id : 2,
//             checked: false,
//             item : 'Item 2'
//         },
//         {
//             id : 3,
//             checked: false,
//             item : 'Item 3'
//         },
//     ]);

//     const [newItem, setNewItem] = useState('')
    
//     const handleCheck = (x) => {
//         const listItems = items.map((item) => item.id === x ? {...item, checked: !item.checked } : item );
//         setItems(listItems);
//         localStorage.setItem("shoppinglist", JSON.stringify(listItems));
//     }   

//     const handleDelete = (x) => {
//         const listItems = items.filter((item) => item.id !== x);
//         setItems(listItems);
//         localStorage.setItem("shoppinglist", JSON.stringify(listItems));        
//     }   


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // console.log('submitted')
//         if (!newItem) return 'hello';
//         console.log(newItem)
//     }
    
//     return (
//         <div className="App">          
//             <Header title="Groceries List"/>
//             <AddItem 
//                 newItem={newItem}
//                 setNewItem={setNewItem}
//                 handleSubmit={handleSubmit}
//             />
//             <Content 
//                 items={items}               
//                 handleCheck={handleCheck}
//                 handleDelete={handleDelete}
//             />
//             <Footer length={items.length}/>           
//         </div>
//     );
// };

// 2)  ///////////////////////////////////////////
export default function App() {
    const [items, setItems ] = useState(JSON.parse(localStorage.getItem("shoppinglist")))  
    const [newItem, setNewItem] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault();       
        console.log(newItem);
        if (!newItem) return;
        addItem(newItem);        
        setNewItem('')
    }

    const addItem = (x) => {
        const id = items.length ? items[items.length- 1].id + 1 : 1;
        const myNewItem = {id, checked:false, x };
        const listItems = [...items, myNewItem];
        // console.log(id)
        setAndSaveItems(listItems);        
    }

    const setAndSaveItems = (newItems) => {
        setItems(newItems);
        localStorage.setItem("shoppinglist", JSON.stringify(newItems));
    }

    const handleCheck = (x) => {
        const listItems = items.map((item) => item.id === x ? {...item, checked: !item.checked } : item );
        setAndSaveItems(listItems);
    }

    const handleDelete = (x) => {
        const listItems = items.filter((item) => item.id !== x);
        setAndSaveItems(listItems);        
    }
    
    return (
        <div className="App">          
            <Header title="Groceries List"/>
            <AddItem 
                newItem={newItem}
                setNewItem={setNewItem}
                handleSubmit={handleSubmit}
            />
            <Content 
                items={items}               
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />
            
            <Footer length={items.length}/>           
        </div>
    );    
}

// 3)  ///////////////////////////////////////////
// export default function App() {
//     const [items, setItems ] = useState(JSON.parse(localStorage.getItem("shoppinglist")))      

//     const [newItem, setNewItem] = useState('')
//     const [search, setSearch] = useState('')

//     const setAndSaveItems = (newItems) => {
//         setItems(newItems);
//         localStorage.setItem("shoppinglist", JSON.stringify(newItems));
//     }

//     const addItem = (item) => {
//         const id = items.length ? items[items.length- 1].id + 1 : 1;
//         const myNewItem = {id, checked:false, item };
//         const listItems = [...items, myNewItem]
//         setAndSaveItems(listItems);        
//     }

//     const handleCheck = (id) => {
//         const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked } :item);
//         setAndSaveItems(listItems);
//     }

//     const handleDelete = (id) => {
//         const listItems = items.filter((item) => item.id !== id);
//         setAndSaveItems(listItems);        
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('submitted')
//         console.log(newItem)
//         if (!newItem) return;
//         addItem(newItem);        
//         setNewItem('')   

//     }
    
//     return (
//         <div className="App">          
//             <Header title="Groceries List"/>            
//             <AddItem 
//                 newItem={newItem}
//                 setNewItem={setNewItem}
//                 handleSubmit={handleSubmit}
//             />
//             <SearchItem
//                 search={search}
//                 setSearch={setSearch}
//             />
//             <Content 
//                 items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}               
//                 handleCheck={handleCheck}
//                 handleDelete={handleDelete}
//             />
            
//             <Footer length={items.length}/>           
//         </div>
//     );    
// }






