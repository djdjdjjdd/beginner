import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalAddNew(props) {

    const {handleClose, show} = props;
    const [name, setName] = useState('');
    const [job, setJob] = useState('')

    const handleSaveUser = () => {
      console.log('>>> chekc state', "name", name, job)
    }

  return (
    
    <>
        <Modal show={show} onHide={handleClose}>
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