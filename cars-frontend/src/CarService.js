import axios from "axios";

class CarService {

    baseUrl = "http://localhost:8080/api/cars"

    getAll = async () => {
        const response = await axios.get(this.baseUrl)
        return response.data
    }

    getById = async (id) => {
        const response = await axios.get(this.baseUrl + `/${id}`)
        return response.data
    }

    post = async (car) => {
        await axios.post(this.baseUrl, car)
    }

    update = async (id, updated) => {
        await axios.put(`${this.baseUrl}/${id}`, updated)
    }

    delete = async (id) => {
        await axios.delete(`${this.baseUrl}/${id}`)
    }
}

export default new CarService();

