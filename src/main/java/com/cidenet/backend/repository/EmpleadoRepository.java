package com.cidenet.backend.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.cidenet.backend.model.Empleado;

public interface EmpleadoRepository extends CrudRepository<Empleado,Integer> {
    @Query(value = "SELECT AUTO_INCREMENT FROM information_schema.TABLES WHERE TABLE_SCHEMA = 'cidenet' AND TABLE_NAME = 'empleados';", nativeQuery = true)
    Long getAutoIncrementValue();
}
