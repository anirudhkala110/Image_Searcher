import React, { createContext, useState } from 'react';
import './App.css';
import Homepage from './Components/Homepage';
import ImageSearch from './Components/ImageSearch';
import Images from './Components/Images';
import useAxios from './Hooks/useAxios';

export const ImageContext = createContext();

function App() {
  const page = 1; // Set the page number here
  const param = '';
  const { response, isLoading, error, fetchData } = useAxios(param);
  const [darkMode, setDarkMode] = useState(false); // State for dark mode

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode); // Toggle dark mode
  };
  const appClass = darkMode ? 'dark-mode pb-5' : 'light-mode pb-5';
  const buttonLabel = darkMode ? 'Light Mode' : 'Dark Mode';
  const value = {
    response,
    isLoading,
    error,
    fetchData,
    darkMode
  };


  return (
    <div className={appClass }>
      <ImageContext.Provider value={value}>
        <Homepage>
          <button onClick={toggleDarkMode} className='btn-warning btn w-100 my-2 fw-bold d-flex justify-content-center'>{buttonLabel} {darkMode ? 
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-toggle-on mx-3" viewBox="0 0 16 16"  >
            <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />{buttonLabel}
          </svg> :
           <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-toggle-off mx-3" viewBox="0 0 16 16" style={{filter:"invert(0)"}}>
            <path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z" />{buttonLabel}
          </svg>}</button>
          <ImageSearch />
        </Homepage>
        <Images />
      </ImageContext.Provider>
    </div>
  );
}

export default App;
