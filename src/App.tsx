import './App.css';
import Animecard from './components/Animecard';
import { useState, useEffect } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className='test3'>
        {/* Scroll-to-Top Arrow */}
        <span
          className={isVisible ? 'ArrowVisible' : 'ArrowHidden'}
          onClick={scrollToTop}
        >
          ^
        </span>

        <div className='container-one'>
          <div className='right-side'>
            <h1>
              My Favourite Anime of <span>All The Time</span>
            </h1>
          </div>
        </div>

        <div className='container-two'>
          <div className='my-anime'>
            <Animecard />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;