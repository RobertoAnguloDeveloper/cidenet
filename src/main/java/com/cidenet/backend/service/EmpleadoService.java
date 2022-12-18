package com.cidenet.backend.service;

import java.util.List;
import java.util.Optional;

import com.cidenet.backend.model.Empleado;

public interface EmpleadoService {
    public Empleado create(Empleado empleado);
    public Optional<Empleado> getEmpleado(Integer id);
    public List<Empleado> empleados();
    public Empleado update(Empleado empleado);
    public boolean delete(Integer id);
    public Long getAutoIncrementValue();
}
