package com.cidenet.backend.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "empleados")
@NoArgsConstructor
@Getter
@Setter
public class Empleado {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String apellido1;
    private String apellido2;
    private String nombre1;
    private String otros;
    private String pais;
    private String tipo_id;
    private String numero_id;
    private String email;
    private String fecha_ingreso;
    private String area;
    private String estado;
    private String fecha_hora_registro;
    
}
