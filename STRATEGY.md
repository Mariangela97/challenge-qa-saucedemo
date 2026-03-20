# Estrategia de Automatización y Patrones utilizados

## Estrategia de Automatización
Siguiendo los requerimientos, la automatización cubre:
- Flujo Completo: El proceso desde el login hasta la confirmación de orden exitosa.
- Gestión de Errores: Validación de que la aplicación responde correctamente ante usuarios bloqueados o datos de checkout incompletos.
  
Escenarios Adicionales:
- Valores Limite: Validación de que los formulariosvaliden correctamente los campos obligatorios.
- Transición de estados: Validación para asegurar que existe persistencia de los productos en el carrito y que el flujo del chekcout es secuencial.
  
Cada escenario es atómico e independiente para evitar que los resultados de una prueba afecten a otras.

## Patrón de Diseño: Page Object Model (POM)
 Elegí este patrón por ser más eficiente para un proyecto pequeño como este, permitiendome tener equilibrio entre orden en el proyecto y rapidez de desarrollo. 
 A esta escala opté por no utilizar otros patrones que tienen una estructura más compleja como Screenplay, 
 el cual podría ser más eficiente en un proyecto de mayor complejidad pero en este caso sería utilizar sobre ingeniería.

 
