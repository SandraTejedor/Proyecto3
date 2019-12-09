import React from 'react'
import { Container } from "react-bootstrap";

const Profile = props => {

    return (
        <Container>
            <section>
                <h1>Bienvenid@ {props.loggedInUser.username}</h1>
            </section>
        </Container>
        
    )
}


export default Profile