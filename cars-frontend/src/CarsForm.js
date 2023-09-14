import React, {useState} from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
import CarService from "./CarService";

const CarForm = () => {
    const [newCar, setNewCar] = useState({name: '', engine: ''});

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setNewCar({...newCar, [name]: value});
    };

    const handleSubmit = async () => {
        await CarService.post(newCar)
        setNewCar({name: '', engine: ''});
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={newCar.name}
                    onChange={handleInputChange}
                />
                <Form.Label>Engine</Form.Label>
                <Form.Control
                    type="text"
                    name="engine"
                    value={newCar.engine}
                    onChange={handleInputChange}
                />
                <br/>
                <Button variant="primary" type="submit">
                    Add Car
                </Button>
            </Form.Group>
            <br/>
        </Form>
    );
};

export default CarForm;
