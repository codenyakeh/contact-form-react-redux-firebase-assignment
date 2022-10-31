import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Contacts from "../Components/Contacts";
import AddContactForm from "../Components/AddContactForm";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import styled from "styled-components";

const Button = styled.button`
background-color: pink;
border: none;
border-radius: 5px;
color: white;
height: 30px;
`;

function Home() {
  const logout = () => {
    try {
      signOut(auth);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Container style={{ marginTop: "30px", width: "100%"}}>
      <Row>
        <Col md={6}>
          <AddContactForm />
        </Col>
        <Col md={6}>
          <Contacts />
        </Col>
      </Row>
      <Button onClick={logout} >LogOut</Button>
    </Container>
  );
}

export default Home;
