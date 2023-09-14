import './App.css';
import React, {useEffect, useState} from "react";
import CarService from "./CarService";
import {Container} from "react-bootstrap";
import CarForm from "./CarsForm";
import CarList from "./CarList";

function App() {
    const [cars, setCars] = useState([])

    useEffect(() => {
        getCars().then()
    }, []);

    const getCars = async () => {
        const data = await CarService.getAll()
        setCars(data)
    }

    const deleteCar = async (id) => {
        await CarService.delete(id)
        await getCars()
    }

    const updateCar = async (id, updated) => {
        await CarService.update(id, updated)
        await getCars()
    }

    return (
        <Container className="App">
            <br/>
            <CarForm/>
            <br/>
            <CarList cars={cars} handleDelete={deleteCar} handleUpdate={updateCar}/>
        </Container>
    );
}

export default App;
