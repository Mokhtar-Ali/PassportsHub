import React from 'react';
import Cairo from '../blogs/Cairo';
// import Sample from '../blogs/BlogSample';
import '../style/blogs.css'
import Phuket from '../blogs/Phuket';
import Quito from '../blogs/Quito';
import Banos from '../blogs/Banos'

function Blogs() { 
  return (
    <div className="blogs">
      <Cairo /> 
      <Phuket />
      <Quito />
      <Banos />
    </div>
  );
}

export default Blogs;
