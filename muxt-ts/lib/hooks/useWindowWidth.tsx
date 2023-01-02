import { useState, useEffect } from 'react'

const useWindowWidth = () => {
   const [windowWidth, setWindowWidth] = useState(0)

   useEffect(() => {
     setWindowWidth(window.innerWidth)
 
     function handleResize() {
       setWindowWidth(window.innerWidth)
     }
 
     window.addEventListener('resize', handleResize)
     return () => window.removeEventListener('resize', handleResize)
   }, [])
 
   return windowWidth
}
 
export default useWindowWidth