
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function ModalConfirm(props) {

    const {handleClose, show, dataUserDelete } = props;
   
    const confirmDelete =() => {

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