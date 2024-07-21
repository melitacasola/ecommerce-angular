# Ecommerce Angular con Platzi Fake Store API

Este proyecto es una aplicación de ecommerce desarrollada con Angular. Utiliza la [Platzi Fake Store API](https://fakeapi.platzi.com/) para gestionar productos y usuarios. La aplicación incluye un sistema de roles (administrador y cliente) y permite al administrador realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) tanto en productos como en usuarios. Se ha utilizado Angular Material para la interfaz de usuario y la librería Toastr para las alertas.

## Características

- **Autenticación de usuarios**: Login y registro de usuarios con detección de roles (administrador y cliente).
- **Roles de usuario**:
  - **Administrador**: Puede gestionar productos y usuarios (CRUD).
  - **Cliente**: Puede ver productos y realizar compras.
- **Gestión de productos**: Crear, leer, actualizar y eliminar productos.
- **Gestión de usuarios**: Crear, leer, actualizar y eliminar usuarios (solo para administradores).
- **Alertas y notificaciones**: Uso de Toastr para mostrar notificaciones en las operaciones.
- **Controlador de rutas**: Uso de guards para administrar las rutas por roles.

## Tecnologías utilizadas

- Angular
- Angular Material
- Toastr
- Platzi Fake Store API

## Requisitos previos

- Node.js y npm instalados
- Angular CLI instalado

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu_usuario/ecommerce-angular.git
    cd ecommerce-angular
    ```

2. Instala las dependencias del proyecto:
    ```bash
    npm install
    ```

3. Configura la URL de la Platzi Fake Store API en el archivo de entorno:
    - Abre el archivo `src/environments/environment.ts` y asegúrate de que la URL de la API esté configurada correctamente.

4. Inicia la aplicación:
    ```bash
    ng serve
    ```

5. Abre tu navegador y ve a `http://localhost:4200`.

## Uso

### Autenticación

- Regístrate o inicia sesión con una cuenta existente o create una cuenta.
- La aplicación detectará si el usuario es un administrador o un cliente basado en los datos de autenticación.

### Panel de administración

- Como administrador, puedes acceder al panel de administración donde podrás gestionar productos y usuarios.
- Navega a `http://localhost:4200/admin` para acceder al panel de administración.

### Gestión de productos

- Los administradores pueden crear, editar, actualizar y eliminar productos desde el panel de administración.

### Gestión de usuarios

- Los administradores pueden crear, editar, actualizar y eliminar usuarios desde el panel de administración.

## Estructura del proyecto

```plaintext
ecommerce-angular/
├── src/
│   ├── app/
|        ├──core
|            ├──guards
|            ├──interceptors
|            ├──services
|            ├──interfaces
|            ├──core.module.ts
|        ├──features
|             ├──auth
|             ├──about-us
|             ├──products
|             ├──users
|        ├──shared
|             ├──angular-material
|             ├──components
|             ├──pipes
|             ├──directives
|             ├──utils
|             ├──shared.module.ts
|   ├──assets
|   ├──environments
─ README.md         

````

## Creadoras

- [Melissa Casola](https://github.com/melitacasola)
- [Brisna Paez](https://github.com/Brisnayu)
- [Lidia Luque](https://github.com/LidiaLG)
