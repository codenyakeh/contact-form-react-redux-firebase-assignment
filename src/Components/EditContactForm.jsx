import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editUsers } from "../action/actions";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";

function EditContactForm(props) {
  const [name, setName] = useState(props.userBio.name);
  const [location, setLocation] = useState(props.userBio.location);
  const [number, setNumber] = useState(props.userBio.number);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //props.editUser(props.userBio.id, { contact, location, number });
    const newUser={
      id:props.userBio.id, name, location, number, timestamp: serverTimestamp};
      try {
        const userRef = doc(db, "Contacts", newUser.id);
        await updateDoc(userRef, newUser);
      } catch (e) {
        console.log(e)
      }
    dispatch(editUsers(newUser))
    setName("");
    setLocation("");
    setNumber("");
    props.hide();
  };
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Location:</Form.Label>
          <Form.Control
            type="location"
            placeholder="eg. name****Hills"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicGen">
          <Form.Label>Number:</Form.Label>
          <Form.Control
            type="Number"
            placeholder="+220******&"
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
        </Form.Group>

        <Button
          onClick={handleSubmit}
          style={{ backgroundColor: "pink", border: "none" }}
          type="submit"
        >
          Add Contact
        </Button>
      </Form>
    </div>
  );
}

export default EditContactForm;
