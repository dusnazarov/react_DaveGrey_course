// 1) //////////////////////////////////////
// const Content = () => {
//     const handleNameChange = () => {
//         const names = ['Bob','Kevin', 'Dave' ];       
//         const int = Math.floor(Math.random() * names.length);                  
//         return names[int];         
//     }

//     const handleClick_1 = () => {
//         console.log('You clicked it')
//     }

//     const handleClick_2 = (name) => {
//         console.log(`It was clicked by ${name}`)
//     }

//     const handleClick_3 = (e) => {
//         // console.log(e)
//         // console.log(e.target)
//         console.log(e.target.innerText)
//     }

//     return (
//         <main>
//             <p>
//                 Hello, {handleNameChange()}
//             </p>
//             <button onClick={handleClick_1}>Click it</button>
//             <button onClick={() => handleClick_2('Elyor')}>Click it</button>
//             <button onClick={(e) => handleClick_3(e)}>Click it</button>
//         </main>
//     )
// }
// export default Content;

// 2) //////////////////////////////////////
import { useState } from  "react"

const Content = () => {
    const [name, setName ] = useState('Dave')

    const handleNameChange = () => {
        const names = ['Bob','Kevin', 'Dave' ];
        const int = Math.floor(Math.random() * names.length);
        setName(names[int]);
    }
   
    const handleClick_1 = (name) => {
        console.log(`It${name} was clicked`)
    }

    const handleClick_2 = (e) => {     
        console.log(e.target.innerText)
    }

    return (
        <main>
            <p>              
                Hello, {name}!
            </p>
            <button onClick={handleNameChange}>Change Name</button>
            <button onClick={() => handleClick_1('Elyor')}>Click it</button>
            <button onClick={(e) => handleClick_2(e)}>Click it</button>
        </main>
    )
}
export default Content;