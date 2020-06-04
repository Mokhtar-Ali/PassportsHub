import React from 'react';
import Phuket from '../blogs/Phuket';
import { Jumbotron } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/thailand.css'

function Thailand() {
    return (
        <div className="egypt">
            <div className='thailand-headlines'>
                <Jumbotron className='thailand-headlines' />
            </div>

            <div className="cities">
                <Phuket />
            </div>
           
        </div>
    );
}

export default Thailand;
