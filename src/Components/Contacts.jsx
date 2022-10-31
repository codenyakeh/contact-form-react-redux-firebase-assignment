import React from "react";
import Contact from "./Contact";
import { Row, Container } from "react-bootstrap";
import {useSelector} from "react-redux";



function Contacts(props) {
	const users  = useSelector((state) => {
		return state.ContactReducer.users;
	});
	return (
		<Container>
			<Row>
				{users.map((item) => {
					return (
						<Contact
							key={item.id}
							userBio={item}
							delete={props.delete}
							editUser={props.editUser}
						/>
					);
				})}
			</Row>
		</Container>
	);
}

export default Contacts;