
import './App.scss';
import Header from './components/Header';
import TableUsers from './components/TableUsers';
import Container from 'react-bootstrap/esm/Container';
import ModalAddNew from './components/ModalAddNew';
import { useState } from 'react';
function App() { 
  const  [isShowModalAddNew, setIsShowModalAddNew] = useState(false);
  const handleClose = () =>  {
    setIsShowModalAddNew(false);
  }
  return (
    <>
      <div className='app-container'>
          <Header/>
          <Container>
            <div className='my-3 add-new'>
             <span><b>
                listUsers
              </b></span>
              <button className='btn btn-success'
                onClick={() => setIsShowModalAddNew(true)}
              >add new users </button>
            </div>
          <TableUsers/>
            <ModalAddNew
              show = {isShowModalAddNew}
              handleClose ={handleClose}
            />
            
          </Container>
        
      </div>
    </>
  );
}

export default App;
