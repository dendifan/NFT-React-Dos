import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/scss/Mint2.scss';
import '../style/scss/Mint3.scss';
import mayorImg from '../style/images/skyscraper_logo.png';
import { Row, Col } from 'react-bootstrap';
const Mint3 = () => {
    return (
        <div className='expires'>
            <Row className='d-flex justify-content-center'>
                <img src={mayorImg} alt='NYC' className='logo-image'/>
            </Row>
            <Row className='d-flex justify-content-center'>
                aa
            </Row>    
        </div>
  )
}

export default Mint3;