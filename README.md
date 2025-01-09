# Pruebas de Autenticación
## Descripción General
Se realizaron pruebas exhaustivas de los mecanismos de autenticación implementados en el sistema, incluyendo JWT y OAuth2. Las pruebas se enfocaron en validar la seguridad, funcionalidad y manejo de errores de los endpoints de autenticación.
## Casos de Prueba
### 1. Autenticación JWT
#### Test Case AUTH-01: Login Exitoso
- **Descripción**: Verificación de login con credenciales válidas
- **Datos de Entrada**: 
```json
{
    "username": "usuario123",
    "password": "Pass123!"
}
```
- **Resultado Esperado**: Token JWT válido
- **Estado**: ✅ PASSED
- **Evidencia**:
  ![image](https://github.com/user-attachments/assets/3af6a09b-25e7-484c-97e7-5be5fd27f72f)
#### Test Case AUTH-02: Login Fallido
- **Descripción**: Intento de login con credenciales inválidas
- **Datos de Entrada**: 
```json
{
    "username": "usuario123",
    "password": "wrong"
}
```
- **Resultado Esperado**: Error 401 Unauthorized
- **Estado**: ✅ PASSED
- **Evidencia**:
![image](https://github.com/user-attachments/assets/909bc33a-b497-4aa3-80bd-a7323f0e3f6b)

#### Test Case AUTH-03: Acceso sin Token
- **Descripción**: Intento de acceso a recurso protegido sin token
- **Datos de Entrada**: Petición sin header Authorization
- **Resultado Esperado**: Error 401 Unauthorized
- **Estado**: ✅ PASSED
- **Evidencia**:
![image](https://github.com/user-attachments/assets/ac0bb528-b28f-4134-96ad-594526d30f43)

# Pruebas de API de Libros

## Descripción General
Se realizaron pruebas exhaustivas de los endpoints relacionados con la funcionalidad de libros, incluyendo búsqueda, obtención de detalles por ISBN y listado de libros destacados. Las pruebas verificaron la correcta funcionalidad, tiempos de respuesta y manejo de errores.

## Casos de Prueba

### 1. Búsqueda de Libros (BOOK-01)

#### Test Case BOOK-01: Búsqueda de Libros
- **Descripción**: Verificación de la funcionalidad de búsqueda de libros
- **Endpoint**: `GET /api/books/search?query=harry`
- **Resultado Esperado**: Lista de libros que contienen "harry"
- **Estado**: ✅ PASSED
- **Tiempo de Respuesta**: 280ms promedio
- **Evidencia**:
![image](https://github.com/user-attachments/assets/01cf180c-140e-4e84-91f0-da9dc9b14670)

### 2. Obtención de Libro por ISBN (BOOK-02)

#### Test Case BOOK-02: Libro por ISBN
- **Descripción**: Recuperación de detalles de un libro específico por ISBN
- **Endpoint**: `GET /api/books/9780747532699`
- **Resultado Esperado**: Detalles del libro específico
- **Estado**: ✅ PASSED
- **Evidencia**:
![image](https://github.com/user-attachments/assets/2b584293-3676-4a9f-a907-8b6bbfc69afc)

### 3. Libros Destacados (BOOK-03)

#### Test Case BOOK-03: Libros Destacados
- **Descripción**: Obtención de la lista de libros destacados
- **Endpoint**: `GET /api/books/featured`
- **Resultado Esperado**: Lista de libros destacados
- **Estado**: ✅ PASSED
- **Evidencia**:
![image](https://github.com/user-attachments/assets/92a7975b-b682-49a1-9fe7-df543113076f)

# Pruebas de API de Shows
## Descripción General
Se realizaron pruebas exhaustivas de los endpoints relacionados con la funcionalidad de shows de TV y películas, incluyendo búsqueda, obtención de detalles por ID y listado de shows destacados. Las pruebas verificaron la correcta funcionalidad, tiempos de respuesta y manejo de errores.

## Casos de Prueba
### 1. Búsqueda de Shows (SHOW-01)
#### Test Case SHOW-01: Búsqueda de Shows
- **Descripción**: Verificación de la funcionalidad de búsqueda de shows
- **Endpoint**: `GET /api/shows/search?query=breaking`
- **Resultado Esperado**: Lista de shows que contienen "breaking"
- **Estado**: ✅ PASSED
- **Tiempo de Respuesta**: 320ms promedio
- **Evidencia**:
  ![image](https://github.com/user-attachments/assets/5a4ca8e4-88c8-4739-b1b3-bd4e14c1ec68)

### 2. Obtención de Show por ID (SHOW-02)
#### Test Case SHOW-02: Show por ID
- **Descripción**: Recuperación de detalles de un show específico por ID
- **Endpoint**: `GET /api/shows/169`
- **Resultado Esperado**: Detalles del show específico
- **Estado**: ✅ PASSED
- **Evidencia**:
  ![image](https://github.com/user-attachments/assets/2d393df2-5542-45c9-81a7-7a8099e9281e)
