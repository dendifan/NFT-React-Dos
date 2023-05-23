import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/scss/Mint2.scss';
import mayorImg from '../style/images/skyscraper_logo.png';
import { Row } from 'react-bootstrap';
const Mint2a = () => {
    
    return (
        <div className='mayor'>
            <Row className='d-flex justify-content-center'>
                <img src={mayorImg} alt='NYC' className='logo-image'/>
            </Row>
            <Row className='d-flex justify-content-center'>
                <div className='mint-time-div'>
                    <div className='d-flex justify-content-center align-items-center mint-time'>
                        PROJECT SDYSCRAPER
                    </div>
                    <div className='mt-3'>
                        (C) Copyright Guardian Anon Corp 1982 <br/>
                        Implemented by Barkman Anon <br/>
                        type skyscraper & press ENTER_
                    </div>
                </div>
            </Row>    
                
            
                
                
        </div>
  )
}

export default Mint2a;