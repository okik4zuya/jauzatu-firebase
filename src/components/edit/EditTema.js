import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase-config";

function EditTema({ value, setValue, showModal, setShowModal, updateHandler }) {
  return (
    <div className='w-[90%] sm:w-3/4 py-4    mx-auto'>
      <Modal
        size='lg'
        show={showModal.tema}
        setShowModal={setShowModal}
        aria-labelledby='contained-modal-title-vcenter'
        centered
        onHide={() => setShowModal({ ...showModal, tema: false })}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Tema</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='sm:px-16'>
            <Form.Group className='mb-3' controlId='inputSlug'>
              <Form.Label>
                Slug <br />
              </Form.Label>
              <Form.Control
                className='formControl'
                type='text'
                placeholder='contoh: omarhana'
                value={value.slug}
                disabled
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='inputTema'>
              <Form.Label>
                Tema <br />
              </Form.Label>
              <Form.Control
                className='formControl'
                type='text'
                placeholder='Tema 01'
                value={value.tema}
                onChange={(e) => {
                  setValue({ ...value, tema: e.target.value });
                }}
              />
            </Form.Group>

            <div className='text-center'>
              <Button
                className='bg-gold text-white'
                variant='primary'
                type='submit'
                onClick={e => updateHandler(e)}
              >
                Update
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default EditTema;
