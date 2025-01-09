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
