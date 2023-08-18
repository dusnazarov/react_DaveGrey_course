import { useState } from  "react"
import { FaTrashAlt } from 'react-icons/fa'


// 1) ///////////////////////////////////////////////////////
// const Content = () => {
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

//     const handleCheck = (x) => {
//         console.log(`key: ${x}`)
        
//     }

//     return (
//         <main>
//             <ul>
//                 { items.map((item) => (
//                     <li className="item" key={item.id}>                      
//                         <input
//                             type="checkbox"
//                             checked={item.checked}
//                             onChange={() => handleCheck(item.id)}                            
//                         />  
                       
//                         <label>{item.item}</label>                       
//                         <FaTrashAlt
//                             role="button"
//                             tabIndex="0"
//                         />
//                     </li>                   
//                 ))}                
//             </ul>
            
//         </main>
//     )
// }
// export default Content


// 2) ///////////////////////////////////////////////////////
// const Content = () => {
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

//     const handleCheck = (x) => {
//         // const listItems = items.map((item) => item);
//         // const listItems = items.map((item) => item.id === x ?  {...item}: item);
//         // const listItems = items.map((item) => item.id === x ?  {id:item.id, checked: !item.checked, item:item.item}: item);   //{}  bu usulda hamasini yozishimiz kerak  
//         const listItems = items.map((item) => item.id === x ? {...item, checked: !item.checked } : item);  // {...item} - o'zgarishsiz qolgan qismini ifodalaydi

//         console.log(listItems)              
//         setItems(listItems);

//         localStorage.setItem("shoppinglist", JSON.stringify(listItems)); // localStorage ga saqlash (yozish).

//         const getMyItems = localStorage.getItem("shoppinglist") // localStorage dan chiqarib olish (console) ga.
//         const myParceResult = JSON.parse(getMyItems)
//         console.log(myParceResult)
  
//     }
//     return (
//         <main>
//             <ul>
//                 {items.map((item) => (
//                     <li className="item" key={item.id}>
//                         <input
//                             type="checkbox"
//                             checked={item.checked}
//                             onChange={() => handleCheck(item.id)}
//                         />
//                         <label>{item.item}</label>                       
//                         <FaTrashAlt
//                             role="button"
//                             tabIndex="0"
//                         />
//                     </li>
//                 ))}
//             </ul>            
//         </main>
//     )
// }
// export default Content
 
// 3) ///////////////////////////////////////////////////////
const Content = () => {
    const [items, setItems ] = useState([
        {
            id : 1,
            checked: true,
            item : 'Item 1'
        },
        {
            id : 2,
            checked: false,
            item : 'Item 2'
        },
        {
            id : 3,
            checked: false,
            item : 'Item 3'
        },
    ]);

    const handleCheck = (x) => {    
      
        const listItems = items.map((item) => item.id === x ? { ...item, checked: !item.checked } : item );       
        setItems(listItems);
        console.log(listItems) 
              

        localStorage.setItem("shoppinglist", JSON.stringify(listItems)); // localStorage ga saqlash (yozish).
        const getMyItems = localStorage.getItem("shoppinglist") // localStorage dan chiqarib olish (console) ga.
        const myParceResult = JSON.parse(getMyItems)
        console.log(myParceResult)
    }

    const handleDelete = (x) => {
        console.log(`delete id : ${x}`)
        const listItems = items.filter((item) => item.id !== x);
        setItems(listItems);

        localStorage.setItem("shoppinglist", JSON.stringify(listItems)); // localStorage ga saqlash (yozish).
        const getMyItems = localStorage.getItem("shoppinglist") // localStorage dan chiqarib olish (console) ga.
        const myParceResult = JSON.parse(getMyItems)
        console.log(myParceResult)     
    }

    return (        
        <main>
            {items.length ? (          
                <ul>
                    {items.map((item) => (
                        <li className="item" key={item.id}>
                            <input
                                type="checkbox"
                                checked={item.checked}
                                onChange={() => handleCheck(item.id)}
                            />
                            <label
                                style={(item.checked) ? { textDecoration:
                                'line-through'} : null}
                                onDoubleClick={() => handleCheck(item.id)}
                            >
                                {item.item}
                            </label>
                            <FaTrashAlt
                                onClick={() => handleDelete(item.id)}
                                role="button"
                                tabIndex="0"
                            />                            
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
            )}            
        </main>
    )   
}
export default Content;