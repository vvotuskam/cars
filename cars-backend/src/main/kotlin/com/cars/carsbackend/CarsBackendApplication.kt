package com.cars.carsbackend

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class CarsBackendApplication

fun main(args: Array<String>) {
    runApplication<CarsBackendApplication>(*args)
}
