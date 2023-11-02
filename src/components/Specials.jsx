import React from 'react';
import '../styles.css';

const Specials = ({ specialsList , removeItems }) => {
  
  return (
    <section className="specials d-flex flex-column justify-content-center align-items-center">
      <div className="container">
        <h2 className='text-center'>Today's Specials</h2>
        <div className="specials-list">
          {specialsList.map((item) => (
            <div className="special-item" key={item.id}>
              <h3>{item.title}</h3>

            </div>
          ))}
        </div>
       
      </div>
       <button onClick={removeItems} className='btn btn-danger text-center mt-5 '>
            DELETE ALL
        </button>
    </section>
  );
};

export default Specials;
