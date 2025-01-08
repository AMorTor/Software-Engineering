**Plan** **de** **Pruebas**

**Tipos** **de** **Pruebas**

**Pruebas** **Funcionales**

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
![image](https://github.com/user-attachments/assets/706954ec-2859-42d7-b6f7-b902ff20dca0)
  ![Login exitoso] 

