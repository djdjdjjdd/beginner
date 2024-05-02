
import './App.scss';
import Header from './components/Header';
import TableUsers from './components/TableUsers';
import Container from 'react-bootstrap/esm/Container';

import { ToastContainer } from 'react-toastify';
function App() { 
  
  return (
    <>
      <div className='app-container'>
          <Header/>
          <Container>
            
          <TableUsers/>
           
            
          </Container>
          <ToastContainer
              position="top-center"
              autoClose={1}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover

          />
         
      </div>
    </>
  );
}

export default App;
