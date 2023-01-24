import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import styled from "styled-components";

export const NewGroup = ({ setshowModalGroup }) => {

    useEffect(() => {
        console.log("ingrso")
    }, [])

    return (
        <Contain className="container">
            <Modal show={true} >
                <Modal.Header closeButton>
                    <Modal.Title>Nuevo grupo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"
                                placeholder="Nombre del grupo"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"
                        onClick={() => {
                            setshowModalGroup(false)
                        }}
                    >
                        Close
                    </Button>
                    <Button variant="primary">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Contain>
    )
}


const Contain = styled.div` 

`