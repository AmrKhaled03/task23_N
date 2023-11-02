import React from 'react';
import '../styles.css';

const Menu = (props) => {
  const menuItems = [
    {
      category: 'Coffee',
      items: [
        'Espresso',
        'Cappuccino',
        'Latte',
        'Mocha',
        'Iced Coffee',
      ],
    },
    {
      category: 'Bakery',
      items: [
        'Croissant',
        'Muffin',
        'Danish',
        'Bagel',
        'Scone',
      ],
    },
  ];




  return (
    <section className="menu">
      <div className="container">
        <h2 className='text-center'>Our Menu</h2>
        <div className="menu-categories">
          {menuItems.map((category, index) => (
            <div className="menu-category" key={index}>
              <h3>{category.category}</h3>
              <ul className="menu-items-list">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {item}
                    <button className='btn btn-primary btn-sm m-2' onClick={()=>props.addToSpecials(item)}>
                 Add To Specials
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
