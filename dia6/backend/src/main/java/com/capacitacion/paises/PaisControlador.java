package com.capacitacion.paises;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@CrossOrigin
@RestController
public class PaisControlador {
	@Autowired
	private PaisRepositorio paisRepositorio;
	
	@GetMapping("/paises/{id}")
	public Pais getById(@PathVariable Long id){
		return paisRepositorio.findById(id)
				.orElseThrow(() -> new RuntimeException("No se encontro pais con " + id));
	}
	
	@GetMapping("/paises")
	public List<Pais> getLista(){
		Iterable<Pais> paises = paisRepositorio.findAll();
		
		return StreamSupport.stream(paises.spliterator(), true)
				.collect(Collectors.toList());
	}
	
	@PostMapping("/paises")
	public Pais crear(
			@RequestBody Pais pais
	){
		return paisRepositorio.save(pais);
	}
	
	@PutMapping("/paises/{id}")
	public Pais actualizar(
			@PathVariable Long id,
			@RequestBody Pais pais
	){
		Pais paisActual = paisRepositorio.findById(id)
				.orElseThrow(() -> new RuntimeException("No existe pais"));
		
		paisActual.setNombre(pais.getNombre());
		paisActual.setCodigoISO(pais.getCodigoISO());
		
		paisRepositorio.save(paisActual);
		
		return pais;
	}
	
	@DeleteMapping("/paises/{id}")
	public void eliminar(@PathVariable Long id){
		paisRepositorio.deleteById(id);
	}
}
