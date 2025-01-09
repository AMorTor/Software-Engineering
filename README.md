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
![image](https://github.com/user-attachments/assets/6651fba9-9c58-4343-9bf3-955de4ebe740)

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
![image](https://github.com/user-attachments/assets/b00927da-6aac-4b27-85b4-92dcd02a2ae6)

*Última actualización: 8 de enero, 2025*
