import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

function EditMempelai({ value, setValue, showModal, setShowModal }) {
  console.log(value.namaLengkapPria);
  return (
    <div>
      <Modal
        size='lg'
        show={showModal.mempelai}
        setShowModal={setShowModal}
        aria-labelledby='contained-modal-title-vcenter'
        centered
        onHide={() => setShowModal({ ...showModal, mempelai: false })}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Tema</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='sm:px-16'>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>
                Nama Lengkap Pria <br />
              </Form.Label>
              <Form.Control
                className='formControl'
                type='text'
                placeholder='nama lengkap pria'
                value={value.namaLengkapPria}
                onChange={(e) => {
                  setValue({ ...value, namaLengkapPria: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>
                Nama Panggilan Pria <br />
              </Form.Label>
              <Form.Control
                className='formControl'
                type='text'
                placeholder='nama pria'
                value={value.namaPria}
                onChange={(e) => {
                  setValue({ ...value, namaPria: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>
                Nama Lengkap Wanita <br />
              </Form.Label>
              <Form.Control
                className='formControl'
                type='text'
                placeholder='nama lengkap wanita'
                value={value.namaLengkapWanita}
                onChange={(e) => {
                  setValue({ ...value, namaLengkapWanita: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>
                Nama Panggilan Wanita <br />
              </Form.Label>
              <Form.Control
                className='formControl'
                type='text'
                placeholder='nama wanita'
                value={value.namaWanita}
                onChange={(e) => {
                  setValue({ ...value, namaWanita: e.target.value });
                }}
              />
            </Form.Group>

            <div className='text-center'>
              <Button
                className='bg-gold text-white'
                variant='primary'
                type='submit'
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

export default EditMempelai;
