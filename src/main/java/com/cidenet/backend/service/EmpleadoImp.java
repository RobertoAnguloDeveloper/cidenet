package com.cidenet.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cidenet.backend.model.Empleado;
import com.cidenet.backend.repository.EmpleadoRepository;

import jakarta.transaction.Transactional;

@Service
public class EmpleadoImp implements EmpleadoService{
    @Autowired
    private EmpleadoRepository empleadoRepository;

    @Override
    @Transactional
    public Empleado create(Empleado empleado) {
        if (empleado.getId() == null){
            return empleadoRepository.save(empleado);
        }else{
            Optional<Empleado> empleadoNew = getEmpleado(empleado.getId());
            if (empleadoNew.isEmpty()){
                return empleadoRepository.save(empleado);
            }else {
                return empleado;
            }
        }
    }

    @Override
    public Optional<Empleado> getEmpleado(Integer id) {
        return empleadoRepository.findById(id);
    }

    @Override
    public List<Empleado> empleados() {
        return (List<Empleado>) empleadoRepository.findAll();
    }

    @Override
    public Empleado update(Empleado empleado) {
        if (empleado != null && empleado.getId() != null){
            if (empleadoRepository.existsById(empleado.getId())){
                Optional<Empleado> oldEmpleado = empleadoRepository.findById(empleado.getId());
                Empleado editedEmpleado = oldEmpleado.get();
                if (empleado.getApellido1() != null){
                    editedEmpleado.setApellido1(empleado.getApellido1());
                }
                if (empleado.getApellido2() != null){
                    editedEmpleado.setApellido2(empleado.getApellido2());
                }
                if (empleado.getNombre1() != null){
                    editedEmpleado.setNombre1(empleado.getNombre1());
                }
                if (empleado.getOtros() != null){
                    editedEmpleado.setOtros(empleado.getOtros());
                }
                if (empleado.getPais() != null){
                    editedEmpleado.setPais(empleado.getPais());
                }
                if (empleado.getTipo_id() != null){
                    editedEmpleado.setTipo_id(empleado.getTipo_id());
                }
                if (empleado.getNumero_id() != null){
                    editedEmpleado.setNumero_id(empleado.getNumero_id());
                }
                if (empleado.getEmail() != null){
                    editedEmpleado.setEmail(empleado.getEmail());
                }
                if (empleado.getFecha_ingreso() != null){
                    editedEmpleado.setFecha_ingreso(empleado.getFecha_ingreso());
                }
                if (empleado.getArea() != null){
                    editedEmpleado.setArea(empleado.getArea());
                }
                if (empleado.getEstado() != null){
                    editedEmpleado.setEstado(empleado.getEstado());
                }
                if (empleado.getFecha_hora_registro() != null){
                    editedEmpleado.setFecha_hora_registro(empleado.getFecha_hora_registro());
                }
                
                return empleadoRepository.save(editedEmpleado);
            }else{
                return empleado;
            }
        }else {
            return empleado;
        }
    }

    @Override
    public boolean delete(Integer id) {
        if(empleadoRepository.existsById(id)){
            empleadoRepository.deleteById(id);
            return true;
        }else
            return false;
    }

    @Override
    public Long getAutoIncrementValue() {
        return empleadoRepository.getAutoIncrementValue();
    }
}
