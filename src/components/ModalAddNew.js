import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { postCreateUser } from '../services/UserService';
import {  toast } from 'react-toastify';


function ModalAddNew(props) {

    const {handleClose, show, handleUpdateTable} = props;
    const [name, setName] = useState('');
    const [job, setJob] = useState('')
    
    const handleSaveUser = async() => {
      let res = await postCreateUser(name, job)
      if(res && res.id){
       
        handleClose();
        setName('');
        setJob('');
        toast.success('ssoooooooooooooooooooooooooooooooooooooooooooooooo');
        handleUpdateTable({first_name:name, id: res.id})
      }else{

      }
      console.log('>>>', res)
      //console.log('>>> chekc state', "name", name, job)
    }

    

  return (
    
    <>
        <Modal  show={show} 
                onHide={handleClose}
                backdrop='static'
                keyboard={false}
                >
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
            <div class="mb-3">
                <label  className="form-label">Name</label>
                <input 
                    type="text" 
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    />
                
            </div>
            <div class="mb-3">
                <label  className="form-label">Job</label>
                <input type="password" 
                      class="form-control" 
                      id="exampleInputPassword1"
                      value={job}
                      onChange={(event) => setJob(event.target.value)}/>
            </div>
            
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(event) => handleSaveUser(event)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      
   
    


    </>
  );
}
export default ModalAddNew;
;