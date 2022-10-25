import { doc, setDoc, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { db } from "../firebase/config";
import { v4 as uuid } from "uuid";

function AddContactForm() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newUser = { name, location, number, id: uuid(), timestamp: serverTimestamp() };

    try {
      const docRef = await setDoc(doc(db, "Contacts", newUser.id), newUser);
    } catch (e) {
      console.log(e);
    }

    const myUsers = { name, location, number, id: uuid() };
    await setDoc(doc(db, "Contacts", myUsers.id), myUsers);

    setName("");
    setLocation("");
    setNumber("");
  };
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
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
            placeholder="eg. West***LLs"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicGen">
          <Form.Label>Phone Number:</Form.Label>
          <Form.Control
            type="number"
            placeholder="+220*****7"
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
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddContactForm;
