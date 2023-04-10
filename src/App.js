import { MdKeyboardArrowLeft } from 'react-icons/md';
import './App.css';
import SidePanel from './SidePanel.jsx';
import Header from './Header.jsx';
import TopSection from './TopSection.jsx';

import Footer from './Footer.jsx';
import { useState } from 'react';
import DataGrid1 from './DataGrid1.jsx';
import DataGrid2 from './DataGrid2.jsx';
import DataGrid3 from './DataGrid3.jsx';
import DataGrid4 from './DataGrid4.jsx';


function App() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [items] = useState(['Item 1', 'Item 2', 'Item 3']);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <div className={`App ${isPanelOpen ? 'panel-open' : ''}`}>
      {/* apms dashboard */}
      <button className="toggle-button" onClick={togglePanel}>
          <MdKeyboardArrowLeft className={`arrow-icon ${isPanelOpen ? '' : 'arrow-icon-open'}`} />
          <MdKeyboardArrowLeft className={`arrow-icon ${isPanelOpen ? '' : 'arrow-icon-open'}`} />
       </button>
        
      {/* side panel component */}
      <div>
        
        <SidePanel items={items} isOpen={isPanelOpen} togglePanel={togglePanel} />
      </div>


      <div><div className='title'>
  <h1>AI integrated power management system</h1>
</div>
<Header />
</div>
      

      {/* header */}
      

      {/* top section */}
      {/* <TopSection /> */}

      {/* container { dg1, dg2, dg3, dg4 } */}
      <div className="data-grid-container">
       
      <div className="grid-item"><DataGrid1 /></div>
          <div className="grid-item"><DataGrid2 /></div>
          <div className="grid-item"><DataGrid3 /></div>
          <div className="grid-item"><DataGrid4 /></div>
       

      </div>
      {/* <Container /> */}

      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
