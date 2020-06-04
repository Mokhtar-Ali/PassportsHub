import React from 'react';
import Cairo from '../blogs/Cairo';
// import Sample from '../blogs/BlogSample';
import '../style/blogs.css'
import Phuket from '../blogs/Phuket';

function Blogs() { 
  return (
    <div className="blogs">
      <Cairo /> 
      <Phuket />
    </div>
  );
}

export default Blogs;
