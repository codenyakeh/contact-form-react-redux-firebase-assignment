import { useState } from "react";
import { Card, Col, Button, Modal } from "react-bootstrap";
import EditContactForm from "./EditContactForm";
import { connect, useDispatch } from "react-redux";
import { deleteUser } from "../action/actions";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";

function Contact(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await deleteDoc(doc(db, "Contacts", props.userBio.id));
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditContactForm
            editUser={props.editUser}
            userBio={props.userBio}
            hide={handleClose}
          />
        </Modal.Body>
      </Modal>
      <Col md={6} style={{ marginBottom: "10px" }}>
        <Card>
          <Card.Body>
            <Card.Title>Name:{props.userBio.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Location:{props.userBio.location}
            </Card.Subtitle>
            <Card.Text>Number:{props.userBio.number}</Card.Text>
            <Button
              href="#"
              size="sm"
              style={{ backgroundColor: "pink", border: "none" }}
              onClick={handleShow}
            >
              Update
            </Button>
            <Button
              href="#"
              size="sm"
              style={{
                backgroundColor: "pink",
                border: "none",
                marginLeft: "5px",
              }}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}

const mapDispatchToPro = {
  deleteUser,
};

export default connect(null, mapDispatchToPro)(Contact);
