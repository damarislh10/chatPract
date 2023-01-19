import React, { useState } from 'react'
import styled from "styled-components";
import Robot from "../assets/robot.gif"
export default function Welcome({ currentUser }) {
    const [userName, setUserName] = useState("");

    return (
        <Container>
            <img src={Robot} alt="" />
            <h1>
                Bienvenido, <span>{currentUser.username}!</span>
            </h1>
            <h3>Selecciona un chat para comenzar a enviar mensajes.</h3>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;