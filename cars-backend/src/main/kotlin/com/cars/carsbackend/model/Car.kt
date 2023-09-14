package com.cars.carsbackend.model

import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
@Table(name = "cars")
data class Car(

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,

    val name: String,

    val engine: Double,

    val createdAt: LocalDateTime = LocalDateTime.now()
)