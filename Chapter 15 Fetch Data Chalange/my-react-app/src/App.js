// 1)  ///////////////////////////////////////////
import {useState, useEffect} from "react";
import Form from "./components/Form";
import './index.css';


export default function App() {
    const API_URl = 'https://jsonplaceholder.typicode.com/'
    const [reqType, setReqType] = useState('users');
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(`${API_URl}${reqType}`);
                const data = await response.json();
                console.log(data);
                setItems(data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchItems();

    }, [reqType])
    
    return(
        <div className="App">
            <Form reqType={reqType} setReqType={setReqType} /> 
       
        </div>
    );        
};


// 2)  ///////////////////////////////////////////
// import {useState, useEffect} from "react";
// import Form from "./Form";
// import './index.css';
// import List from "./List";


// export default function App() {
//     const API_URl = 'https://jsonplaceholder.typicode.com/'
//     const [reqType, setReqType] = useState('users');
//     const [items, setItems] = useState([]);

//     useEffect(() => {
//         const fetchItems = async () => {
//             try {
//                 const response = await fetch(`${API_URl}${reqType}`);
//                 const data = await response.json();
//                 console.log(data);
//                 setItems(data);
//             } catch (err) {
//                 console.log(err);
//             }
//         }
//         fetchItems();

//     }, [reqType])
    
//     return(
//         <div className="App">
//             <Form reqType={reqType} setReqType={setReqType} />
//             <List items={items}/> 
       
//         </div>
//     );        
// }








