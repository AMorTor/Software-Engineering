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

### 3. Shows Destacados (SHOW-03)
#### Test Case SHOW-03: Shows Destacados
- **Descripción**: Obtención de la lista de shows destacados
- **Endpoint**: `GET /api/shows/featured`
- **Resultado Esperado**: Lista de shows destacados
- **Estado**: ✅ PASSED
- **Evidencia**:
  ![image](https://github.com/user-attachments/assets/761d82f6-c1f0-4e0a-9e15-c718d1172393)

# Pruebas de API de Usuario
## Descripción General
Se realizaron pruebas exhaustivas de los endpoints relacionados con la funcionalidad de usuarios, incluyendo la obtención del perfil de usuario y gestión de datos personales. Las pruebas verificaron la correcta funcionalidad, seguridad y manejo de datos sensibles.

## Casos de Prueba
### 1. Obtener Perfil de Usuario (USER-01)
#### Test Case USER-01: Obtener Perfil
- **Descripción**: Verificación de la obtención del perfil del usuario actual
- **Endpoint**: `GET /api/users/profile`
- **Resultado Esperado**: Datos del usuario actual
- **Estado**: ✅ PASSED
- **Tiempo de Respuesta**: 150ms promedio
- **Evidencia**:
![image](https://github.com/user-attachments/assets/7b90c4d7-33f9-410c-8c8c-9aaa8a0ea00e)

# Pruebas de Seguridad
## Descripción General
Se realizaron pruebas exhaustivas de seguridad para identificar y mitigar vulnerabilidades potenciales en el sistema. Las pruebas incluyeron análisis de SQL Injection, XSS, CSRF y pruebas de autenticación avanzadas.

## Análisis de Vulnerabilidades
### Herramienta Utilizada
- OWASP ZAP

### Resultados de Escaneo

#### 1. SQL Injection
- **Nivel**: Alto
- **Estado**: ✅ Protegido
- **Solución Implementada**: Uso de JPA y parámetros preparados
- **Evidencia**:
  ![image](https://github.com/user-attachments/assets/a5fc3ff1-a062-432a-bb2a-0c71b6830959)

#### 2. Cross-Site Scripting (XSS)
- **Nivel**: Medio
- **Estado**: ✅ Protegido
- **Solución Implementada**: Escape de caracteres especiales
- **Evidencia**:
  ![image](https://github.com/user-attachments/assets/cb016a2b-3dd4-46bb-b690-1ceda864a5cd)

#### 3. Cross-Site Request Forgery (CSRF)
- **Nivel**: Alto
- **Estado**: ✅ Protegido
- **Solución Implementada**: Tokens CSRF implementados
- **Evidencia**:
  ![image](https://github.com/user-attachments/assets/83115d19-eb30-4ffe-9010-a8f16c567b46)

## Pruebas de Autenticación
### Escenarios Evaluados

#### 1. Protección contra Fuerza Bruta
- **Estado**: ✅ Bloqueado
- **Implementación**: Rate limiting
- **Evidencia**:
![image](https://github.com/user-attachments/assets/6267ea71-fabd-4130-ac4f-d49caa8402b3)

#### 2. Seguridad de Token JWT
- **Estado**: ✅ Seguro
- **Implementación**: Acceso con rol de administrador
- **Notas**: Validación de tokens y roles implementada correctamente

#### 3. Integración OAuth2
- **Estado**: ✅ Verificado
- **Implementación**: Flujo seguro con Google
- **Evidencia**:
![image](https://github.com/user-attachments/assets/51a75610-debb-4307-8664-f41ec5ef2d7a)

# Pruebas de Rendimiento
## Descripción General
Se realizaron pruebas exhaustivas de rendimiento para evaluar el comportamiento del sistema bajo diferentes condiciones de carga y estrés. Las pruebas se enfocaron en medir tiempos de respuesta, uso de recursos y capacidad de manejo de usuarios concurrentes.

## Pruebas de Carga
### Configuración de Pruebas
- **Herramienta Utilizada**: Apache JMeter 5.6.2
- **Duración**: 10 minutos
- **Usuarios Concurrentes**: 1
- **Tasa de Peticiones**: 1 por segundo

### Resultados por Endpoint

#### 1. API de Libros (Búsqueda)
- **Endpoint**: `/api/books/search`
- **Tiempo Promedio**: 280ms
- **Tiempo Máximo**: 850ms
- **Peticiones/seg**: 1
- **Porcentaje de Error**: 0.1%

#### 2. API de Shows (Búsqueda)
- **Endpoint**: `/api/shows/search`
- **Tiempo Promedio**: 320ms
- **Tiempo Máximo**: 920ms
- **Peticiones/seg**: 2
- **Porcentaje de Error**: 0.2%

#### 3. API de Usuario (Perfil)
- **Endpoint**: `/api/users/profile`
- **Tiempo Promedio**: 150ms
- **Tiempo Máximo**: 450ms
- **Peticiones/seg**: 3
- **Porcentaje de Error**: 0.0%

### Evidencia
![image](https://github.com/user-attachments/assets/ae37bdca-17cf-4ce7-90ff-9224a57090c6)

# Pruebas de Usabilidad
## Descripción General
Se realizaron pruebas exhaustivas de usabilidad enfocadas en el diseño responsivo, accesibilidad y compatibilidad entre navegadores. Las pruebas aseguraron una experiencia de usuario óptima en diferentes dispositivos y plataformas.

## Pruebas de Diseño Responsivo
### Configuración de Pruebas
- **Dispositivos Evaluados**:
  1. Desktop (1920x1080)
  2. Tablet (768x1024)
  3. Mobile (375x667)

### Resultados
#### 1. Desktop
- **Resolución**: 1920x1080
- **Estado**: ✅ Óptimo
- **Observaciones**: Interfaz completamente funcional y optimizada

#### 2. Tablet
- **Resolución**: 768x1024
- **Estado**: ✅ Adaptado
- **Observaciones**: Elementos correctamente redimensionados

#### 3. Mobile
- **Resolución**: 375x667
- **Estado**: ✅ Adaptado
- **Observaciones**: Navegación móvil optimizada

### Evidencia
![image](https://github.com/user-attachments/assets/4065c141-2742-4014-8c5a-c37466640d51)

## Pruebas de Accesibilidad
### Herramienta Utilizada
- WAVE Web Accessibility Tool

### Resultados

#### 1. Texto Alternativo
- **Criterio**: Alt text
- **Estado**: ✅ Pasado
- **Observaciones**: Todas las imágenes tienen texto alternativo

#### 2. Contraste
- **Criterio**: Contraste
- **Estado**: ✅ Pasado
- **Observaciones**: Ratios de contraste adecuados

#### 3. Etiquetas ARIA
- **Criterio**: ARIA labels
- **Estado**: ✅ Pasado
- **Observaciones**: Componentes correctamente etiquetados

### Evidencia
![image](https://github.com/user-attachments/assets/8c50d295-3ba5-45fb-ad60-fe41dde99ac3)


## Mejoras de Usabilidad Implementadas
1. **Navegación Intuitiva**:
   - Menú responsive
   - Breadcrumbs implementados
   - Búsqueda accesible

2. **Formularios Optimizados**:
   - Validación en tiempo real
   - Mensajes de error claros
   - Autocompletado implementado

3. **Experiencia de Usuario**:
   - Tiempos de carga optimizados
   - Feedback visual para acciones
   - Diseño consistente

## Conclusiones
- ✅ Diseño responsivo funciona correctamente en todos los dispositivos
- ✅ Cumplimiento de estándares de accesibilidad
- ✅ Interfaz intuitiva y fácil de usar
- ✅ Experiencia de usuario consistente
