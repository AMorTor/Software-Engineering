# Sistema de Administración de Usuarios

Este proyecto implementa un sistema de administración de usuarios, permitiendo la creación de cuentas, el inicio de sesión y la gestión de usuarios con diferentes permisos.

## Ejecución

La aplicación incluye un frontend en **React** y un backend en **Spring** desplegado en **AWS**.

## Requisitos Previos

- **Node.js** y **npm**
- **Java 11** o superior
- **Maven**
- **Git**

## Clonar el Repositorio

Para comenzar, clona el repositorio en tu máquina local:
git clone https://github.com/AMorTor/Software-Engineering
cd Practice2

## Instrucciones

## Backend
El backend está desarrollado en Spring y está montado en AWS. No es necesario ejecutar el backend localmente si se desea usar la instancia en AWS.

## Frontend
Para correr el frontend, sigue los siguientes pasos:

Navega al directorio del frontend (React):
cd Practice2-frontend

Instala las dependencias:
npm install

Ejecuta la aplicación:
npm run dev

## Funcionalidades

## Usuarios sin privilegios de administrador
Los usuarios regulares pueden:
Crear una cuenta desde la pantalla de "Sign Up".
Iniciar sesión en la plataforma.
Ver, editar y eliminar únicamente su propio perfil.
![alt text](<Imagen de WhatsApp 2024-11-02 a las 23.03.05_93ca225a.jpg>)

## Usuarios con permisos de administrador
Los administradores tienen acceso completo a la administración de usuarios y pueden:
Crear, leer, actualizar y eliminar cualquier usuario registrado en el sistema.
![alt text](<Imagen de WhatsApp 2024-11-02 a las 23.16.26_36218e58.jpg>)

## Acceso
Las vistas principales incluyen:
Pantalla de Login: Permite a los usuarios iniciar sesión en el sistema.
![alt text](<Imagen de WhatsApp 2024-11-02 a las 23.01.59_8149c391.jpg>)
Pantalla de Registro (Sign Up): Permite a los usuarios crear una nueva cuenta.
![alt text](<Imagen de WhatsApp 2024-11-02 a las 23.02.23_49068f25.jpg>)
Pantalla de Perfil: Donde los usuarios pueden ver y modificar su información.
![alt text](<Imagen de WhatsApp 2024-11-02 a las 23.03.37_9dedb600.jpg>)
Pantalla de Administración de Usuarios (solo para administradores): Muestra la lista completa de usuarios y permite realizar acciones CRUD.
![alt text](<Imagen de WhatsApp 2024-11-02 a las 23.17.21_861c8f1e.jpg>)