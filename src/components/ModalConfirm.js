
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {deleteUser} from '../services/UserService';
import  { toast } from 'react-toastify'

function ModalConfirm(props) {

    const {handleClose, show, dataUserDelete,handleDeleteUserFromModal } = props;
   
    const confirmDelete = async() => {
        let res = await deleteUser(dataUserDelete.id);
        if (res && +res.statusCode === 204) {
            toast.success('delete user succeed');
            handleClose();
            handleDeleteUserFromModal(dataUserDelete)
        }else {
            toast.error('error delete user')
        }
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
            <div className='body-add-new'>
                <b> email = { dataUserDelete.email}</b>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(event) => confirmDelete(event)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      
   
    


    </>
  );
}
export default ModalConfirm;
;