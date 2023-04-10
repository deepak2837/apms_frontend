import React, { useState } from 'react';
import './SidePanel.css';

const SidePanel = ({ items, isOpen ,togglePanel}) => {
//   const [isOpen, setIsOpen] = useState(true);

//   const togglePanel = () => {
//     setIsOpen(!isOpen);
//   };

  return (
    <div className={`side-panel ${isOpen ? 'open' : ''}`}>
      {/* <div className="side-panel__header">
        
        <div className="side-panel__close-btn" onClick={togglePanel}>
          &times;
        </div>
      </div> */}
      <div className="side-panel__content">
        {items.map((item, index) => (
          <div
            key={index}
            className="side-panel__item"
            onClick={() => console.log(`Go to page for item ${item}`)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidePanel;
