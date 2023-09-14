package com.cars.carsbackend.dto

import com.cars.carsbackend.model.Car
import org.springframework.stereotype.Component

@Component
class CarMapper {

    fun convertToResponse(car: Car?): CarResponse? {
        if (car == null) return null
        return CarResponse(
            id = car.id!!,
            name = car.name,
            engine = car.engine
        )
    }

    fun convertToCar(request: CarRequest): Car {
        return Car(
            name = request.name ?: "",
            engine = request.engine ?: 0.0
        )
    }
}