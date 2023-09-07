# Feature: primera pruba a pantalla ASM

# @primeraPruebaASM         
#      Scenario Outline: "Datos de entidad"
#           Given una consulta al servicio Validar entidad con "<entidad>"
#           When me logueo a ASM con "<usuario>" y "<password>" y escribo el numero de doc en el campo vendedor e intercepto los servicios.
#           Then el campo entidad debe contener el valor "<entidad>"
#           And el campo entidad debe estar bloqueado.
#           And el campo descripción de entidad debe contener el nombre del usuario
#           And la solapa Configuración de venta debe estar visible
#           And verifico que los valores del campo Negocio son los correctos según RefCode

#           Examples:
#                 Examples:
#                | usuario   | password  | entidad | 
#                | AGEP10153 | Claro.123 | 10153   |
               
# @primeraPruebaASM	
#      Scenario Outline: "validate seller Error"

#           Given una consulta al servicio Validar entidad con "<entidad>"
#           When me logueo a ASM con "<usuario>" y "<password>" y escribo el numero de doc en el campo vendedor e intercepto los servicios.
#           Then el campo entidad debe contener el valor "<entidad>"
#           And el campo descripción de entidad debe contener el nombre del usuario
#           And el servicio validateSeller debe tener un status 200

#           Examples:
#                 Examples:
#                | usuario   | password  | entidad | 
#                | AGEP46004 | Claro.123 | 46004   |
#                | AGEP46003 | Claro.123 | 46003   |
