import {useState, useEffect} from 'react'


const useWindowSize = () => {
    const [useWindowSize, setUseWindowSize] = useState({
        width : undefined,
        height : undefined
    });

    useEffect(() => {
        const handleResize = () => {
            setUseWindowSize({
                width : window.innerWidth,
                height : window.innerHeight
            })
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        
        const cleanUp = () => {           
            window.removeEventListener("resize", handleResize);
        }
        return cleanUp;
    }, [])

    return useWindowSize;
}
export default useWindowSize;
