package com.cars.carsbackend.controller

import com.cars.carsbackend.dto.CarRequest
import com.cars.carsbackend.service.CarService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/cars")
class CarController(
    private val carService: CarService
) {

    @GetMapping
    fun getAll() : ResponseEntity<Any> {
        return ResponseEntity.ok(carService.getAll())
    }

    @GetMapping("/{id}")
    fun get(@PathVariable id: Long): ResponseEntity<Any> {
        return ResponseEntity.ok(carService.getById(id))
    }

    @PostMapping
    fun post(@RequestBody request: CarRequest): ResponseEntity<Any> {
        carService.post(request)
        return ResponseEntity.ok("Posted")
    }

    @PutMapping("/{id}")
    fun update(
        @PathVariable id: Long,
        @RequestBody request: CarRequest
    ): ResponseEntity<Any> {
        carService.update(id, request)
        return ResponseEntity.ok("Updated")
    }

    @DeleteMapping("/{id}")
    fun delete(@PathVariable id: Long): ResponseEntity<Any> {
        carService.delete(id)
        return ResponseEntity.ok("Deleted")
    }
}