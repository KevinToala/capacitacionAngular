package com.capacitacion.personas;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@CrossOrigin
@RestController
public class PersonaControlador {
	@Autowired
	private PersonaRepositorio personaRepositorio;
	
	@GetMapping("/personas/{id}")
	public Persona getPersonaById(@PathVariable Long id){
		return personaRepositorio.findById(id)
				.orElseThrow(() -> new RuntimeException("No se encontro persona con " + id));
	}
	
	@GetMapping("/personas")
	public List<Persona> getListPersonas(){
		Iterable<Persona> personas = personaRepositorio.findAll();
		
		return StreamSupport.stream(personas.spliterator(), true)
				.collect(Collectors.toList());
	}
	
	@PostMapping("/personas")
	public Persona crear(
			@RequestBody Persona persona
	){
		return personaRepositorio.save(persona);
	}
	
	@PutMapping("/personas/{id}")
	public Persona actualizar(
			@PathVariable Long id,
			@RequestBody Persona personaActualizar
	){
		Persona persona = personaRepositorio.findById(id)
				.orElseThrow(() -> new RuntimeException("No se encontro persona con " + id));
		
		
		persona.setNombres(personaActualizar.getNombres());
		persona.setApellidos(personaActualizar.getApellidos());
		persona.setIdentificacion(personaActualizar.getIdentificacion());
		persona.setGenero(personaActualizar.getGenero());
		persona.setFecha(personaActualizar.getFecha());
		persona.setCorreo(personaActualizar.getCorreo());
		persona.setTelefono(personaActualizar.getTelefono());
		
		personaRepositorio.save(persona);
		
		return persona;
	}
	
	@DeleteMapping("/personas/{id}")
	public void eliminar(@PathVariable Long id){
		personaRepositorio.deleteById(id);
	}
}
