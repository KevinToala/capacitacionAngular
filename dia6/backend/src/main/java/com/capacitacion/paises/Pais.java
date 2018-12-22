package com.capacitacion.paises;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "paises")
public class Pais {
	private Long id;
	private String nombre;
	private String codigoISO;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long getId(){
		return id;
	}
	
	public void setId(Long id){
		this.id = id;
	}
	
	@NotBlank
	public String getNombre(){
		return nombre;
	}
	
	public void setNombre(String nombre){
		this.nombre = nombre;
	}
	
	@NotBlank
	@Size(min = 3, max = 3)
	@Column(name = "codigo_iso")
	public String getCodigoISO(){
		return codigoISO;
	}
	
	public void setCodigoISO(String codigoISO){
		this.codigoISO = codigoISO;
	}
}
