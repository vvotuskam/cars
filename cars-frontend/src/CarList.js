import React, {useState} from 'react';
import {Button, Form, Modal, Table} from 'react-bootstrap';

const CarList = ({cars, handleDelete, handleUpdate}) => {

    const [showModal, setShowModal] = useState(false)
    const [formData, setFormData] = useState({
        id: 0,
        name: "",
        engine: "",
    });

    const update = (car) => {
        setFormData({
            id: car.id,
            name: car.name,
            engine: car.engine
        })
        setShowModal(true)
    }

    return (
        <div className="container">
            <h2>Car List</h2>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Engine</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {cars.map((car) => (
                    <tr key={car.id}>
                        <td>{car.id}</td>
                        <td>{car.name}</td>
                        <td>{car.engine}</td>
                        <td>
                            <Button
                                variant="info"
                                onClick={() => update(car)}
                            >
                                Edit
                            </Button>{" "}
                            <Button
                                variant="danger"
                                onClick={() => handleDelete(car.id)}
                            >
                                Delete
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Car</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({...formData, name: e.target.value})
                                }
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Engine</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter engine"
                                value={formData.engine}
                                onChange={(e) =>
                                    setFormData({...formData, engine: e.target.value})
                                }
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => {
                        handleUpdate(
                            formData.id,
                            {
                                name: formData.name,
                                engine: formData.engine
                            }
                        )
                        setShowModal(false)
                    }
                    }>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CarList;
