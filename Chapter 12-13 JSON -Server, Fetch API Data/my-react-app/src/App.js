import Header from "./layout/Header"
import Content from "./components/Content"
import Footer from "./layout/Footer"
import React, { useState, useEffect } from  "react"
import AddItem from "./components/AddItem"
import SearchItem from "./layout/SearchItem"


// 1) ///////////////////////////////////////////
export default function App() {
    // const API_URL = '  http://localhost:3500/items';
    const API_URL = '  http://localhost:3500/itemss';

    const [items, setItems ] = useState([]);   
    const [newItem, setNewItem] = useState('');
    const [search, setSearch] = useState('');
    const [fetchError, setFetchError] = useState(null);
  

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(API_URL);                
                if (!response.ok) throw Error('Dit not receive expected data');
                const listItems = await response.json();
                console.log(listItems);
                setItems(listItems);
                setFetchError(null);

            } catch (err) {
                console.log(err.message);
                setFetchError(err.message);
            }
        }
       
        (async () => await fetchItems())();
    }, [])
   

    const addItem = (item) => {
        const id = items.length ? items[items.length- 1].id + 1 : 1;
        const myNewItem = {id, checked:false, item };
        const listItems = [ ...items, myNewItem ]
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
            <main>
                {fetchError && <p style={{ color : "red"}}>{`Error: ${fetchError}`}</p>}
                {!fetchError && <Content 
                    items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}               
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />}
            </main>            
            <Footer length={items.length}/>           
        </div>
    );    
}

// 2) ///////////////////////////////////////////
// export default function App() {
//     const API_URL = '  http://localhost:3500/items';
//     // const API_URL = '  http://localhost:3500/itemss';

//     const [items, setItems ] = useState([]);   
//     const [newItem, setNewItem] = useState('');
//     const [search, setSearch] = useState('');
//     const [fetchError, setFetchError] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);
  

//     useEffect(() => {
//         const fetchItems = async () => {
//             try {
//                 const response = await fetch(API_URL);                
//                 if (!response.ok) throw Error('Dit not receive expected data');
//                 const listItems = await response.json();
//                 console.log(listItems);
//                 setItems(listItems);
//                 setFetchError(null);

//             } catch (err) {
//                 console.log(err.message);
//                 setFetchError(err.message);
//             } finally {
//                 setIsLoading(false);
//             }
//         }
//         setTimeout(() => {
//             (async () => await fetchItems())();

//         }, 2000)       
        
//     }, [])
   

//     const addItem = (item) => {
//         const id = items.length ? items[items.length- 1].id + 1 : 1;
//         const myNewItem = {id, checked:false, item };
//         const listItems = [ ...items, myNewItem ]
//         setItems(listItems);        
//     }

//     const handleCheck = (id) => {
//         const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked } :item);
//         setItems(listItems);
//     }

//     const handleDelete = (id) => {
//         const listItems = items.filter((item) => item.id !== id);
//         setItems(listItems);        
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();       
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
//             <main>
//                 {isLoading && <p>Loading Items...</p>}
//                 {fetchError && <p style={{ color : "red"}}>{`Error: ${fetchError}`}</p>}
//                 {!fetchError && !isLoading && <Content 
//                     items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}               
//                     handleCheck={handleCheck}
//                     handleDelete={handleDelete}
//                 />}
//             </main>            
//             <Footer length={items.length}/>           
//         </div>
//     );    
// }






