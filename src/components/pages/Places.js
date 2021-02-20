// import React from 'react';
// import '../../App.css';
//
// export default function Places() {
//   return <h1 className='places'>Places</h1>;
// }
import React from 'react';
import {Button} from "../Button";

const Places=() => {
  return (
      <div className='place-container'>
        <img className="img-place" src='/images/img-1.jpg' />

        <h1 style={{color:'lightgray',fontFamily:'Mongolian Baiti',fontSize:'80px' }}>WELCOME TO SAINT MARTIN</h1>

      </div>
  );
};

export default Places;
