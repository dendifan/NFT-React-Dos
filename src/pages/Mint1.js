import React, { useState, useEffect } from 'react';
import '../style/scss/Mint1.scss';

const Mint1 = () => {
  const [loadingText, setLoadingText] = useState('');
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoadingText((prevText) => prevText + '.');
    }, 500);
    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <>
        <div className="dos-screen">
            <div className="text-row">Microsoft(R) MS-DOS(R) (C) Copyright Microsoft Corp C:\ {loadingText}&gt;</div>
            <div className="text-row blink">_</div>
        </div>
    </>
  )
}

export default Mint1;