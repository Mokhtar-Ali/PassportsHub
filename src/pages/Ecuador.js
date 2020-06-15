import React from 'react';
import Quito from '../blogs/Quito';
import { Jumbotron } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/ecuador.css'

function Ecuador() {
    return (
        <div className="ecuador">
            <div className='ecuador-headlines'>
                <Jumbotron className='ecuador-headlines' />
            </div>

            <div className="cities">
                <Quito />
            </div>
           
        </div>
    );
}

export default Ecuador;
