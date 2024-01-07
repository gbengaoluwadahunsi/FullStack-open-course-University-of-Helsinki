import  { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const handleDisplay = () => {
    setShowMenu(!showMenu);
  };

  const handleClose = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="navbar-section">
      <h6 className='logo'>Countria</h6>
      
     
      <div>
      
        <div ref={menuRef} className={`nav-li ${showMenu ? 'show-nav' : ''}`}>
          <span onClick={handleClose}>✖</span>
          <ul>
            <a href="https://openweathermap.org/api" target="_blank" rel="noopener noreferrer">API</a>
            <a href="https://www.google.com/maps/d/u/0/viewer?mid=1hjs3mIoZBblBP_CvxiP4w38STiY&hl=en_US&ll=15.792914338408416%2C34.569168&z=2" target="_blank" rel="noopener noreferrer">Maps</a>
            <a href="https://blog.weather.us/" target="_blank" rel="noopener noreferrer">Blog</a>
            <li>Sign in</li>
          </ul>
        </div>
      </div>

      <div className='hamburger' onClick={handleDisplay}>
        ☰
      </div>
    </header>
  );
};

export default Navbar;
