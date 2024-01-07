import { FaArrowCircleUp } from 'react-icons/fa';
import { useEffect , useState } from 'react';
 
 const ScrollUp = () => {

  const [isVisible, setIsVisible] = useState(false)
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };    

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
   }, []);

   return (
    <>     
        <button className="btn-scrollTop" style={{display: isVisible ? 'block':'none'}} onClick={goTop}>
            <FaArrowCircleUp/>
        </button>

    </>
   )
 }
 
 export default ScrollUp