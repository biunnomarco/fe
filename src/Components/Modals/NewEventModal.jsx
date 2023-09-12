import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSession } from '../../Middlewares/ProtectedRoutes';

function NewEventModal({toggleEvent}) {

    const session = useSession()

  return (
    <div
      className="modal show"
      style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.8)'  }}
    >
      <Modal.Dialog centered size="lg" backdrop="static">
        <Modal.Header>
          <Modal.Title>CREA UN NUOVO EVENTO</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{session.id}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={()=>toggleEvent()} variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default NewEventModal;