package com.capacitacion.personas;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "personas")
public class Persona {
	private Long id;
	private String nombres;
	private String apellidos;
	private String identificacion;
	private Genero genero;
	private LocalDate fecha;
	
	private String correo;
	private String telefono;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long getId(){
		return id;
	}
	
	public void setId(Long id){
		this.id = id;
	}
	
	public String getNombres(){
		return nombres;
	}
	
	public void setNombres(String nombres){
		this.nombres = nombres;
	}
	
	public String getApellidos(){
		return apellidos;
	}
	
	public void setApellidos(String apellidos){
		this.apellidos = apellidos;
	}
	
	public String getIdentificacion(){
		return identificacion;
	}
	
	public void setIdentificacion(String identificacion){
		this.identificacion = identificacion;
	}
	
	@Enumerated(EnumType.STRING)
	public Genero getGenero(){
		return genero;
	}
	
	public void setGenero(Genero genero){
		this.genero = genero;
	}
	
	public LocalDate getFecha(){
		return fecha;
	}
	
	public void setFecha(LocalDate fecha){
		this.fecha = fecha;
	}
	
	public String getCorreo(){
		return correo;
	}
	
	public void setCorreo(String correo){
		this.correo = correo;
	}
	
	public String getTelefono(){
		return telefono;
	}
	
	public void setTelefono(String telefono){
		this.telefono = telefono;
	}
}
