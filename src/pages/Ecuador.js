import React from 'react';
import Quito from '../blogs/Quito';
import Banos from '../blogs/Banos';
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
                <Banos />
            </div>
           
        </div>
    );
}

export default Ecuador;
