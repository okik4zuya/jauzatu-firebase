import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
  onSnapshot,
  setDoc
} from "firebase/firestore";
import { db } from "../firebase-config";
import EditTema from "../components/edit/EditTema";
import EditMempelai from "../components/edit/EditMempelai";

function Edit() {
  const [showModal, setShowModal] = useState({
    tema: false,
    mempelai: false,
    acara: false,
    teks: false,
  });
  //Get URL Parameter
  const [slugQuery, setSlugQuery] = useState("");
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    setSlugQuery(q.get("slug"));
  }, [slugQuery]);
  

  const invitationsCollectionRef = collection(db, "invitations");
  const q = query(invitationsCollectionRef, where("slug", "==", slugQuery));
  const [value, setValue] = useState({ loading: true });
  const [curretData, setCurrentData] = useState([])

  // Assign retrieved data to 'value' state
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(q);
      setValue({
        ...data.docs.map((doc) => doc.data())[0],
        id: data.docs.map((doc) => doc.id)[0],
      });
      onSnapshot(collection(db, 'invitations'), snap => {
        console.log(`Query data`)
        console.log(snap.docs.map(doc => ({...doc.data(), id: doc.id})))
        setCurrentData((snap.docs.map(doc => ({...doc.data(), id: doc.id}))).filter(el => el.slug === slugQuery))
      })
    };
    getPosts();
  }, [slugQuery]);

  // Update Handler
  const updateHandler = async e => {
    e.preventDefault()
    const invitationDocs = doc(db, "invitations", curretData[0].id); // "GtnhzBwAyOXuQVQnwKHT"
    try {
      
      await setDoc(invitationDocs, { tema: value.tema })

      // const data = await updateDoc(invitationDocs, {
      //   tema: value.tema
      // });
      // console.log(`Edited data...`)
      // console.log(data)
      // return data

    } catch (error) {
      console.log(`${error}`)
    }
  };

  return (
    <div>
      <div className='relative min-h-screen w-full lg:w-[1024px]  mx-auto'>
        <div className='relative top-[0px]'>
          <div className=' relative text-center font-montserrat text-lg sm:text-2xl font-bold py-10  '>
            Selamat datang <br />{" "}
            <span className='text-xl sm:text-3xl'> (nama lengkap) </span>
          </div>
        </div>
        {/*--- Modal---*/}
        <div>
          <EditTema
            value={value}
            setValue={setValue}
            showModal={showModal}
            setShowModal={setShowModal}
            updateHandler={updateHandler}
          />
          <EditMempelai
            value={value}
            setValue={setValue}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </div>
        {/*--- Modal---*/}
        {/*--- Awal Accordion Edit---*/}
        <div className='relative h-[150px] top-[0px] px-4'>
          <Accordion>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>Tema</Accordion.Header>
              <Accordion.Body>
                <div className='grid grid-cols-12 mb-2 sm:text-xl sm:mb-4 sm:px-40 '>
                  <div className='col-span-3'>Slug</div>
                  <div className='col-span-1'>:</div>
                  <div className='col-span-8'>{value.slug}</div>
                </div>
                <div className='grid grid-cols-12 mb-2 sm:text-xl sm:mb-4 sm:px-40 '>
                  <div className='col-span-3'>Tema</div>
                  <div className='col-span-1'>:</div>
                  <div className='col-span-8'>{value.tema}</div>
                </div>
                <div className='text-center'>
                  <Button
                    variant='primary'
                    onClick={() => {
                      setShowModal({ ...showModal, tema: true });
                      console.log(showModal.tema);
                    }}
                  >
                    Ubah
                  </Button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1'>
              <Accordion.Header>Mempelai</Accordion.Header>
              <Accordion.Body>
                <div className='grid grid-cols-12 mb-2 sm:text-xl sm:mb-4 sm:px-40 '>
                  <div className='col-span-5'>Nama Lengkap Pria</div>
                  <div className='col-span-1'>:</div>
                  <div className='col-span-6'>{value.namaLengkapPria}</div>
                </div>
                <div className='grid grid-cols-12 mb-2 sm:text-xl sm:mb-4 sm:px-40 '>
                  <div className='col-span-5'>Nama Panggilan Pria</div>
                  <div className='col-span-1'>:</div>
                  <div className='col-span-6'>{value.namaPria}</div>
                </div>
                <div className='grid grid-cols-12 mb-2 sm:text-xl sm:mb-4 sm:px-40 '>
                  <div className='col-span-5'>Nama Lengkap Wanita</div>
                  <div className='col-span-1'>:</div>
                  <div className='col-span-6'>{value.namaLengkapWanita}</div>
                </div>
                <div className='grid grid-cols-12 mb-2 sm:text-xl sm:mb-4 sm:px-40 '>
                  <div className='col-span-5'>Nama Panggilan Wanita</div>
                  <div className='col-span-1'>:</div>
                  <div className='col-span-6'>{value.namaWanita}</div>
                </div>
                <Button
                  variant='primary'
                  onClick={() => setShowModal({ ...showModal, mempelai: true })}
                >
                  Ubah
                </Button>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='2'>
              <Accordion.Header>Acara</Accordion.Header>
              <Accordion.Body>
                <Form className='sm:px-16'>
                  <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>
                      Tanggal Akad <br />
                    </Form.Label>
                    <Form.Control
                      className='formControl'
                      type='date'
                      placeholder=''
                    />
                  </Form.Group>

                  <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>
                      Jam Akad <br />
                    </Form.Label>
                    <Form.Control
                      className='formControl'
                      type='time'
                      placeholder=''
                    />
                  </Form.Group>

                  <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>
                      Tanggal Resepsi <br />
                    </Form.Label>
                    <Form.Control
                      className='formControl'
                      type='date'
                      placeholder=''
                    />
                  </Form.Group>

                  <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>
                      Jam Resepsi <br />
                    </Form.Label>
                    <Form.Control
                      className='formControl'
                      type='time'
                      placeholder=''
                    />
                  </Form.Group>

                  <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>
                      LokasiAkad <br />
                    </Form.Label>
                    <Form.Control
                      className='formControl'
                      type='textarea'
                      placeholder=''
                    />
                  </Form.Group>

                  <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>
                      LokasiResepsi <br />
                    </Form.Label>
                    <Form.Control
                      className='formControl'
                      type='textarea'
                      placeholder=''
                    />
                  </Form.Group>

                  <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>
                      Label <br />
                    </Form.Label>
                    <Form.Control
                      className='formControl'
                      type='text'
                      placeholder=''
                    />
                  </Form.Group>

                  <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>
                      Label <br />
                    </Form.Label>
                    <Form.Control
                      className='formControl'
                      type='text'
                      placeholder=''
                    />
                  </Form.Group>

                  <div>
                    <Button
                      className='bg-gold text-white'
                      variant='primary'
                      type='submit'
                    >
                      Update
                    </Button>
                  </div>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='3'>
              <Accordion.Header>Teks</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        {/*--- Akhir Accordion Edit---*/}
      </div>
    </div>
  );
}

export default Edit;
