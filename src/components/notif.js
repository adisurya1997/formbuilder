import { Modal} from 'react-bootstrap';



export default function Notif(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div style={{ backgroundColor: "#f5f9f8",padding: "20px",borderRadius: "5px" , color: "#109913"}}>
        <Modal.Body>
            <h4 className='d-flex justify-content-center'>Thank you for ordering in us,please wait to verify you order</h4>
        </Modal.Body>
      </div>
    </Modal>
  );
}