package com.cars.carsbackend.service

import com.cars.carsbackend.dto.CarMapper
import com.cars.carsbackend.dto.CarRequest
import com.cars.carsbackend.dto.CarResponse
import com.cars.carsbackend.repository.CarRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service

@Service
class CarService(
    private val carRepository: CarRepository,
    private val mapper: CarMapper,
) {

    fun getAll() : List<CarResponse> {
        return carRepository.findAll()
            .map { mapper.convertToResponse(it)!! }
            .toList()
    }

    fun getById(id: Long): CarResponse? {
        return mapper.convertToResponse(
            car = carRepository.findByIdOrNull(id)
        )
    }

    fun post(car: CarRequest) {
        carRepository.save(mapper.convertToCar(car))
    }

    fun update(id: Long, updated: CarRequest): Boolean {
        val car = carRepository.findById(id)
        if (car.isEmpty) return false
        carRepository.save(car.get().copy(
            name = updated.name ?: car.get().name,
            engine = updated.engine ?: car.get().engine
        ))
        return true
    }

    fun delete(id: Long) {
        carRepository.deleteById(id)
    }
}