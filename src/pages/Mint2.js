import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/scss/Mint2.scss';
import mayorImg from '../style/images/skyscraper_logo.png';
import { Row } from 'react-bootstrap';
const Mint2 = () => {
    const [countdownDate, setCountdownDate] = useState(new Date('2023-06-01T22:00:10').getTime());
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
          const now = new Date().getTime();
          const distance = countdownDate - now;
    
          setTimeLeft({
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000),
          });
        }, 1000);
    
        return () => clearInterval(intervalId); // cleanup function to clear the interval on unmount
      }, [countdownDate]);

    return (
        <div className='mayor'>
            <Row className='d-flex justify-content-center'>
                <img src={mayorImg} alt='NYC' className='logo-image'/>
            </Row>
            <Row className='d-flex justify-content-center'>
                <div className='mint-time-div'>
                    <div className='d-flex justify-content-center align-items-center mint-time'>
                        {(timeLeft.hours < 10) ? <span>0{timeLeft.hours}</span> : timeLeft.hours}:{(timeLeft.minutes < 10) ? <span>0{timeLeft.minutes}</span> : timeLeft.minutes}:{(timeLeft.seconds < 10) ? <span>0{timeLeft.seconds}</span> : timeLeft.seconds }
                    </div>
                    <div className='mt-3'>
                        (C) Copyright Guardian Anon Corp 1982 <br/>
                        Implemented by Barkman Anon <br/>
                        countdown in progress_
                    </div>
                </div>
            </Row>    
                
            
                
                
        </div>
  )
}

export default Mint2;