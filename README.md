
#  INGENIERÍA DE SOFTWARE I -PROYECTO SeCo_System :desktop_computer: 
## :label: Propósito del Proyecto
El  proyecto desarrollado es referido a "La semana de computación " en la escuela profesional de Ciencia de la Computación, la cual tiene como proposito proporcionar información a los usuarios que quieren saber mas de la escuela, asi como de poder participar ya sea como invitados, ponentes, o simplemente en los concursos que ofrece la escuela.
## :red_circle: Desarrollo
### Diagrama de Casos de Uso
![image](https://github.com/GabrielPacco/SeCo_System/blob/main/Recursos/Main.png) 
### Diseño de Modelo de Datos 
![image](https://github.com/GabrielPacco/SeCo_System/blob/main/Recursos/modelo.png)
### Diseño de Arquitectura
![image](https://github.com/GabrielPacco/SeCo_System/blob/main/Recursos/Arquitectura.png)
## Estilos de Programación <br>
### **1. Things**: <br>
Variación del estilo Pipeline, con las siguientes restricciones adicionales:<br>
  Cada función toma un parámetro adicional, generalmente el último, que es otra función.<br><br>
  **Ejemplo:** para el ruteo, el módulo express toma como parámetros funciones Middleware y Funciones de controlador que manejan el flujo de los Objetos Request anh Response de HTTP.<br>
<br>

### **2. Kick Forward**:<br>
El problema más grande se descompone en cosas que tienen sentido para el dominio del problema.<br><br>
**Ejemplo:** Para la manipulación de los datos se consideró un enfoque orientado a Objetos.<br>
<br>

### **3. Constructivist**:<br>
Cada función verifica la cordura de sus argumentos y devuelve algo sensato cuando los argumentos no son razonables o les asigna valores razonables.<br><br>
**Ejemplo:** para el manejo de errores de tipo conexión y creación de datos se uso bloques```Try{}Catch(error){}```
<br>
## Prácticas de código legible<br>
1. Los nombres de las funciones realizan lo mencionado.
```
const loginPageController = (req,res) =>{
    res.render('visitor/login', {page:'login'})
}
```
2. Cada función realiza una sola tarea.
```
function emailActiveClients(clients) {
    clients.filter(isActiveClient).forEach(email);
}

function isActiveClient(client) {
    const clientRecord = database.lookup(client);
    return clientRecord.isActive();
}
```
3. Se documenta y comenta cada función para poder orientarse.
```
//Clase Actividad
class Actividad:
  //Atributos de la clase actividad
    def __init__(self):
        self.id = None
        self.nombreActividad = None
        self.fecha = None
        self.horainicio = None
        self.horafin = None
        self.estado = None
        self.enlacereunion = None
```
4. Los nombres de las variable tienen un significativo y son pronunciables.
```
const currentDate = moment().format("YYYY/MM/DD");
```
5. Se utilizo el mismo vocabulario para el mismo tipo de variable.
```
getUserInfo();
getClientData();
getCustomerRecord();
```
