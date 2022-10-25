import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "./firebase/config";
import { addUser } from "./action/actions";
import { useDispatch } from "react-redux";
import Contacts from "./Components/Contacts";
import AddContactForm from "./Components/AddContactForm";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const readData = async () => {
      const q = query(collection(db, "Contacts"), orderBy("timestamp", "asc"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const userArr = [];
        querySnapshot.forEach((doc) => {
          userArr.push(doc.data());
        });
        dispatch(addUser(userArr));
        console.log(userArr);
      });
    };
    readData();
  }, []);

  // const [users, setUsers] = useState([
  //   {
  //     ContactName: "Emrica",
  //     Location: "East",
  //     Number: "21",
  //     id: "ggggggggg123",
  //   },
  //   { ContactName: "Emma", Location: "West", Number: "22", id: "ggggggggg124" },
  //   { ContactName: "Eno", Location: "north", Number: "23", id: "ggggggggg125" },
  // ]);
  // const addNewUser = (user) => {
  //   user.id = Math.random().toString();
  //   setUsers([...users, user]);
  //   console.log(user);
  // };

  // const deleteUser = (id) => {
  //   // setUsers(users.filter((user) => user.id !== id));
  //   setUsers(
  //     users.filter((user) => {
  //       if (user.id !== id) {
  //         return user;
  //       }
  //     })
  //   );
  // };
  // const EditUser = (id, newData) => {
  //   setUsers(
  //     users.map((user) => {
  //       if (user.id === id) {
  //         return newData;
  //       }
  //       return user;
  //     })
  //   );
  // };

  return (
    <Container style={{ marginTop: "30px" }}>
      <Row>
        <Col md={6}>
          <AddContactForm //newUser={addNewUser}
          />
        </Col>
        <Col md={6}>
          <Contacts
          //userData={users}
          //editUser={EditUser}
          //delete={deleteUser}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
