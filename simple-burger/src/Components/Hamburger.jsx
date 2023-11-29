import { useState } from 'react'
import '../App.css';
import '../Constants/malzemeler'

const Hamburger = ({malzemeler}) => {
  return (
    <>
      <div>
          <div className="BreadT" style={{
            height: "50px",
            width: "100px"
           
          }}/>
{
  malzemeler.map((malzeme) => {
    const elements = [];
    const malzemeOrtak = (
      <div
        key={malzeme.id} // Anahtar ekle
        style={{
          height: "50px",
          backgroundColor: malzeme.color,
          width: "100px",
          borderRadius: "30%"
        }}
      >
        <p>{malzeme.name} and {malzeme.price}</p>
      </div>
    );
    for (let i = 0; i < malzeme.count; i++) {
      elements.push(malzemeOrtak);
    }
    return elements;
  })
}

          <div className='BreadB' style={{
            height: "50px",
            width: "100px"
          }}/>

      </div>
    
    
    
    
    </>
  );
};

export default Hamburger;
