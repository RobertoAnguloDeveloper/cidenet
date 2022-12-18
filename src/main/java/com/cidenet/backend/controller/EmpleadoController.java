package com.cidenet.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;

import com.cidenet.backend.model.Empleado;
import com.cidenet.backend.service.EmpleadoImp;

@RestController
@RequestMapping("api/Empleado")
@CrossOrigin(origins = "*")
public class EmpleadoController {
    @Autowired
    private EmpleadoImp empleadoService;
    public static Empleado empleado;

    @Value("${spring.datasource.url}")
    private String datasourceUrl;

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public void createEmpleado(@RequestBody Empleado empleado){
        empleadoService.create(empleado);
    }

    @GetMapping("/all")
    public List<Empleado> getEmpleados(){
        return empleadoService.empleados();
    }

    @GetMapping("/auto_increment_value")
    public Long auto_increment_value(){
        return empleadoService.getAutoIncrementValue();
    }

    @GetMapping("/host")
    public String getHost(){
        String host = datasourceUrl.replace("jdbc:mysql://", "");
        host = host.replace(":3306/cidenet", "");
        return host;
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Empleado updateEmpleado(@RequestBody Empleado empleado){
        return empleadoService.update(empleado);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteEmpleado(@PathVariable ("id") Integer id){
        empleadoService.delete(id);
    }
}
