import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import { BsCheckLg } from "react-icons/bs";
import { TfiClose } from "react-icons/tfi";

export const NewGroup = ({ setshowModalGroup, participants }) => {
    const [nameGroup, setNameGroup] = useState("")

    const handleOnChange = (event) => {
        setNameGroup(event.target.value)
      } 

      const handleSumbit = (e) => {
        e.preventDefault()
        console.log(participants)
        console.log(nameGroup)
        
      }
      
  return (
    <Contain className="container">
      <Modal show={true}>
        <Modal.Header>
          <Modal.Title>Nuevo grupo</Modal.Title>
          <Button
            variant="light"
            onClick={() => {
              setshowModalGroup(false);
            }}
          >
            <TfiClose></TfiClose>
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSumbit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control onChange={handleOnChange} type="text" placeholder="Nombre del grupo" maxLength={11} />
            </Form.Group>
            <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setshowModalGroup(false);
            }}
          >
            Cerrar
          </Button>
          <Button type="submit" variant="success">
            <BsCheckLg></BsCheckLg>
          </Button>
        </Modal.Footer>
          </Form>
        </Modal.Body>
       
      </Modal>
    </Contain>
  );
};

const Contain = styled.div``;
