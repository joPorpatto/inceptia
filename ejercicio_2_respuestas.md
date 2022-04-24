
### Ejercicio 2:
Conteste las siguientes preguntas. La respuesta debe estar en archivo
ejercicio_2_respuestas.md, dentro del repositorio.

**2.1 ¿Cómo implementarías las acciones del frontend utilizando redux? (por
ejemplo autenticación, solicitud de clientes activos para el usuario y
solicitud de casos por cliente)**

Para este proyecto se utilizó Redux toolkit, ya que tiene una implementación sencilla dados los ejercicios propuestos, con el objetivo de tener un estado global en toda la aplicación.

-Se crea un Store

-En el file index.js se provee a todos los componentes

-Se crean 3 slices (para la autenticación, para los cleintes, y para los filtros por fechas)

-Por cada uno se crean los valores iniciales con sus redurs, extraReducers y acciones.

 Tomando de ejemplo authSlice, tiene una acción llamada "login" que llama a la API y su respuesta es seteada en el estado global de la aplicación. Además nos dá la posibilidad de tener referencias de saber si el servicios está en loading, success o failed.

**2.2  Si quisiéramos agregar una ruta nueva a la app, ¿cómo reestructurarías
el index.js?**

Para la gestión de rutas, utilicé React-Router-Dom con componentes privados y públicos, ya que hay una ruta para el Login. Si el proyecto escalara y se necesitan más rutas podrían ser incluídas en AppRoutes.js que sería el nodo hijo del index.js.

