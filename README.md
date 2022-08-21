
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


# **Estilos de Programación**

# **Prácticas de Código Legible**

1. Agrupación de código. \
    La mayoría de las veces, ciertas tareas requieren unas pocas líneas de código. Es una buena idea mantener estas tareas dentro de bloques de código separados, con algunos espacios entre ellos.
    ``` 
    ################### Actividad ################################
    # Funcion para obtener una actividad por su ID
    def get_actividad(self, ID_Actividad):    
        params = {'ID_Actividad' : ID_Actividad}      
        rv = self.mysql_pool.execute("SELECT * from actividad where ID_Actividad=%(ID_Actividad)s", params)                
        data = []
        content = {}
        for result in rv:
            content = {'ID_Actividad': result[0], 'nombre': result[1], 'descripcion': result[2], 'fechaInicio': result[3], 'fechaFin': result[4], 'enlaceReunion': result[5], 'isProtocolar': result[6], 'isPonencia': result[7], 'isPanel': result[8], 'isConcurso': result[9], 'bases': result[10]}
            data.append(content)
            content = {}
        return data


    ################### Contribuidor ################################
    # Funcion para obtener un contribuidor por su ID
    def get_contribuidor(self, ID_Contribuidor):
        params = {'ID_Contribuidor' : ID_Contribuidor}      
        rv = self.mysql_pool.execute("SELECT * from contribuidor where ID_Contribuidor=%(ID_Contribuidor)s", params)                
        data = []
        content = {}
        for result in rv:
            content = {'ID_Contribuidor': result[0], 'nombre': result[1], 'apellido': result[2], 'email': result[3], 'telefono': result[4], 'isOrganizador': result[5], 'isAsistente': result[6], 'isInvitado': result[7]}
            data.append(content)
            content = {}
        return data
    ```
2. Se Utilizo el mismo vocabulario para el mismo tipo de variable
    ``` {js}
    get_Actividad();
    get_Adminstrador();
    get_Concurso();
    get_Edicion();

    add_Actividad();
    add_Adminstrador();
    add_Concurso();
    add_Edicion();
    ```
3. Poner en mayúscula las palabras especiales de SQL
    ```{js}
    CREATE TABLE  usuario
    (
        id_user INT PRIMARY KEY ,
        nombre VARCHAR(50),
        usuario VARCHAR(50),
        contrasenia VARCHAR(50),
        email VARCHAR(50),
        telefono INT
    );

    CREATE TABLE invitado
    (
        id_inv INT,
        id_user INT,
        universidad  VARCHAR(50),
        carrera  VARCHAR(50),
        grado  VARCHAR(20),
        PRIMARY KEY (id_user,id_inv),
        FOREIGN KEY (id_user) REFERENCES usuario (id_user)
    );
    ```
4. Cada función realiza solo realiza una tarea
    ```{js}
    # Funcion para obtener una actividad por su ID
    def get_actividad(self, ID_Actividad):    
        ...
    return data

    # Funcion para obtener todas las actividades
    def get_actividads(self):  
        ...
    return data

    # Funcion para agregar una actividad
    def add_actividad(self, nombre, descripcion,
        fechaInicio, fechaFin, enlaceReunion, isProtocolar,
        isPonencia, isPanel, isConcurso, bases):
        ...    
    return data

    # Funcion para eliminar una actividad
    def delete_actividad(self, ID_Actividad):    
        ...
    return data
    ```
5. Los nombres de las funciones realizan lo mencionado
    ``` {js}
    @task_blueprint.route('/actividad/add_actividad', methods=['POST'])
    @cross_origin()
    def create_task():
        ...
        return jsonify(content)

    @task_blueprint.route('/actividad/delete_actividad', methods=['POST'])
    @cross_origin()
    def delete_task():
        return jsonify(model.delete_actividad(int(request.json['ID_Actividad'])))

    @task_blueprint.route('/actividad/get_actividad', methods=['POST'])
    @cross_origin()
    def actividad():
        return jsonify(model.get_actividad(int(request.json['ID_Actividad'])))

    @task_blueprint.route('/actividad/get_actividads', methods=['POST'])
    @cross_origin()
    def tasks():
        return jsonify(model.get_actividads())
    ```
6. Organización de Archivos y Carpetas.

    ![image](https://live.staticflickr.com/65535/52300101188_80a37989c3_n.jpg)
