import React, { useEffect, useRef } from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import styled from "styled-components";
import { TfiClose } from "react-icons/tfi"
import { FaArrowRight } from "react-icons/fa"
import Select from 'react-select';


export const AddParticipants = ({ setshowModal, setshowModalGroup, contacts, setparticipantsGro }) => {
  const [currentSelected, setCurrentSelect] = useState(undefined);
  const [contactsSelect, setContactsSelect] = useState([]);
  const [participants, setParticipants] = useState([])

  useEffect(() => {
    const array = []
    contacts.forEach(element => {
      array.push({
        value: element.avatarImage + element.username, label:

          <div className="d-flex gap-3 align-items-center">
            <img
              style={{ width: '30px' }}
              src={`data:image/svg+xml;base64,${element.avatarImage}`}
              alt=""
            />
            <p style={{ margin: '0px' }}>{element.username}</p>
          </div>


      });
      setContactsSelect([
        ...contactsSelect,
        ...array
      ])
    });
  }, [])

  const handleOnChange = (event) => {
    const array = []
    event.forEach(e => {
      let {value} = e
    array.push({value})
    setParticipants([
      ...array
    ]
      )
    });

  }

  const sendAddParticipant = () => {
    setshowModal(false)
    setshowModalGroup(true)
    setparticipantsGro(participants)
  }
  return (
    <Contain className="container">

      <Modal show={true} >
        <Modal.Header className="EmojiPickerReact d-block">
          <div className="d-flex justify-content-between align-items-center">
            <Modal.Title>Nuevo grupo</Modal.Title>
            <Button variant="light" onClick={() => {
              setshowModal(false)
            }}><TfiClose ></TfiClose></Button>
          </div>

          <p className="opacity-50 m-0">Añade participantes del grupo</p>

        </Modal.Header>

        <Modal.Body className="EmojiPickerReact">
          <Form >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">


              <Select
                isMulti
                required
                placeholder="Escribe el nombre del contacto"
                name="colors"
                onChange={handleOnChange}
                className="border border-0 border-bottom rounded-0"
                options={contactsSelect}
                classNamePrefix="select"
              />

            </Form.Group>
          
          </Form>
  
              <div className="my-4 d-flex flex-wrap justify-content-center gap-4 overflow-auto" >

                {contacts.map((contact, index) => {
                  return (
                    <div
                      key={contact._id}
                      className={`contact ${index === currentSelected ? "selected" : ""}`}

                    >
                      <div className="avatar" style={{ width: '90px' }}>
                        <img
                          src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                          alt=""
                        />
                      </div>
                      <div className="username">
                        <h5 className="text-center">{contact.username}</h5>
                      </div>
                    </div>
                  );
                })}
              </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {
            setshowModal(false)
          }}>
            Cerrar
          </Button>
          {participants.length !== 0 ? 
            <Button variant="success" className="btn-seg" onClick={() => {
              sendAddParticipant()
            }}>
              <FaArrowRight></FaArrowRight>
            </Button>
          :""} 
        
        </Modal.Footer>
      </Modal>
    </Contain >
  );
};

const Contain = styled.div`
.btn-seg{
  background-color: #9a86f3;
}
.EmojiPickerReact {
  background-color: #080420 !important;
  box-shadow: 0 5px 10px #9a86f3 !important;
  border-color: #9a86f3 !important;
  }
.contacts {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  gap: 0.8rem;
  &::-webkit-scrollbar {
    width: 0.2rem;
    &-thumb {
      background-color: #ffffff39;
      width: 0.1rem;
      border-radius: 1rem;
    }
  }

  .contact {
    background-color: #ffffff34;
    
    min-height: 5rem;
    cursor: pointer;
    width: 90%;
    border-radius: 0.2rem;
    padding: 0.9rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    transition: 0.5s ease-in-out;
    .avatar {
      img {
        height: 3rem;
      }
    }
    .username {
      h3 {
        color: white;
        font-size: 18px;
        margin: 0;
      }
    }
  }

`