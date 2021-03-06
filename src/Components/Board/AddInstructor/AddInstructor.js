import axios from 'axios';
import React, { useState } from 'react';
import { Container, Modal, Button } from 'react-bootstrap';
const AddInstructor = () => {
    const [email, setEmail] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleOnChange = e => {
        const value = e.target.value;
        setEmail(value)

    }
    // setting the admin role in db
    const handleAddAdmin = e => {
        e.preventDefault()
        // const user = { email };
        console.log(email)
        axios.put(`https://fierce-woodland-01411.herokuapp.com/tutor/${email}`).then(res => res.data.modifiedCount ? handleShow() : '')

    }


    return (
        <>
            <Container >
                <h2 data-aos="fade-down-right" className='text-center'>Add a Tutor</h2>
                <form className='mt-3 pt-2 d-flex justify-content-center py-3' onSubmit={handleAddAdmin}>
                    <input required className='adminAdd   my-4 w-25' type="email" onChange={handleOnChange} placeholder='email' name="email" id="email" />
                    <button className='adminAdd btncolr px-5 mt-4 fs-3 '>Add </button>
                </form>
                {/* modal for showing confirmation */}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Tutor Added</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>We have a new tutor in the house!!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={handleClose}>
                            Cheers!!
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
          
        </>
    );
};

export default AddInstructor;