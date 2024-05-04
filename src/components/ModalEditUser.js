import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {  putUpdateUser } from '../services/UserService';
import {  toast } from 'react-toastify';


function ModalEditUser(props) {

    const {handleClose, show, dataUserEdit, handleEditUserFromModal} = props;
    const [name, setName] = useState('');
    const [job, setJob] = useState('')
    
    const handleEditUser = async() => {
      let res = await putUpdateUser(name, job);
      if (res && res.updateAt) {
        handleEditUserFromModal({
            first_name: name,
            id: dataUserEdit.id
        })
        handleClose();
        toast.success("udate")
      }
    };

    useEffect(() => {
        if(show) {
            setName(dataUserEdit.first_name)
            
        }

    }, [dataUserEdit])
    
    console.log('>>> check props:', dataUserEdit)
  return (
    
    <>
        <Modal show={show} onHide={handleClose}
                backdrop='static'
                keyboard={false}
          >
        <Modal.Header closeButton>
          <Modal.Title>Edit a user</Modal.Title>
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
          <Button variant="primary" onClick={(event) => handleEditUser (event)}>
           confirm 
          </Button>
        </Modal.Footer>
      </Modal>
      
   
    


    </>
  );
}
export default ModalEditUser;
;