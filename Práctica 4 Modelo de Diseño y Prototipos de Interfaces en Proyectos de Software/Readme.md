# Aplicación Web de Recomendación de Libros y Series

## Descripción
Esta aplicación web desarrollada con Spring Boot permite a los usuarios buscar y gestionar libros y series de TV, integrando las APIs de Open Library y TVMaze. El sistema incluye funcionalidades de gestión de usuarios, historial de búsquedas, favoritos y recomendaciones personalizadas.

## Características Principales

### Gestión de Usuarios
- Sistema de registro y autenticación
- Perfiles de usuario con foto personalizable
- Roles diferenciados (Usuario y Administrador)
- OAuth2 para autenticación con servicios externos

### Búsqueda y Contenido
- Integración con Open Library API para búsqueda de libros y autores
- Integración con TVMaze API para búsqueda de series y películas
- Historial de búsquedas personalizado
- Sistema de favoritos para libros y shows
- Recomendaciones basadas en preferencias del usuario

### Funcionalidades Administrativas
- Panel de administración de usuarios
- Visualización del historial de búsquedas de todos los usuarios
- Gestión de perfiles y contenido

## Tecnologías Utilizadas
- Java 21
- Spring Boot 3.4.0
- Spring Security
- Spring Data JPA
- Thymeleaf
- MySQL
- Maven
- OAuth2
- Jackson para procesamiento JSON
- WebFlux para consumo de APIs
- JUnit 5 para pruebas

## Requisitos del Sistema
- Java 21
- MySQL 8.0+
- Maven 3.8+

## Instalación y Configuración

1. Clonar el repositorio
```bash
git clone [url-del-repositorio]
```

2. Configurar la base de datos MySQL en `application.properties`

3. Ejecutar las migraciones de la base de datos
```sql
source book_movie_recommendation_db.sql
```

4. Compilar y ejecutar el proyecto
```bash
mvn clean install
mvn spring-boot:run
```

## Estructura del Proyecto
```
version/
├── src/main/java/com/web/book/version/
│   ├── config/         # Configuraciones de seguridad y web
│   ├── controller/     # Controladores REST y MVC
│   ├── dto/           # Objetos de transferencia de datos
│   ├── model/         # Entidades y modelos
│   ├── repository/    # Repositorios JPA
│   └── service/       # Lógica de negocio
└── src/main/resources/
    ├── static/        # Recursos estáticos (CSS, JS, imágenes)
    └── templates/     # Plantillas Thymeleaf
```

## Endpoints Principales

### Autenticación
- `POST /auth/login` - Inicio de sesión
- `POST /auth/register` - Registro de usuario

### Contenido
- `GET /books/search` - Búsqueda de libros
- `GET /movies/search` - Búsqueda de series/películas
- `GET /favorites` - Lista de favoritos
- `GET /recommendations` - Recomendaciones personalizadas

### Administración
- `GET /admin/dashboard` - Panel de administración
- `GET /admin/users` - Gestión de usuarios

## Pruebas
El proyecto incluye pruebas unitarias y de integración utilizando JUnit 5. Para ejecutar las pruebas:
```bash
mvn test
```

## Contribuciones
Las contribuciones son bienvenidas. Por favor, asegúrese de:
1. Hacer fork del proyecto
2. Crear una rama para su característica
3. Enviar un pull request

## Licencia
Este proyecto está bajo la licencia [tipo de licencia].

## Autores
Gustavo Ivan García Quiroz

## Estado del Proyecto
En desarrollo activo - Última actualización: Diciembre 2024
