# API Graphql - Order Now

## Descripción

Esta es la API de gestión de tareas para la aplicación **Order Now**, que permite a los usuarios crear y gestionar tareas de manera eficiente. La API está construida utilizando **GraphQL** y **TypeScript**, proporcionando un enfoque flexible y tipado estático para interactuar con los datos. Los usuarios pueden crear, consultar y administrar sus tareas, todo mientras se asegura la autenticación y la seguridad de sus datos mediante el uso de Web Tokens.

## Características

- **Gestión de Usuarios**: Permite crear y gestionar usuarios en la aplicación.
- **Gestión de Tareas**: Los usuarios pueden crear, consultar y eliminar tareas.
- **Autenticación Segura**: Utiliza Web Tokens para validar las acciones de los usuarios.
- **Cifrado de Contraseñas**: Las contraseñas de los usuarios se almacenan de forma segura utilizando un algoritmo de cifrado.

### Ejemplo de Autenticación

```javascript
import jwt from 'jsonwebtoken';

// Generar un token
const generarToken = (usuario) => {
    return jwt.sign({ id: usuario._id }, 'tu_clave_secreta', { expiresIn: '1h' });
};
```

## Cifrado de Contraseñas

Las contraseñas de los usuarios se cifran utilizando el paquete `bcrypt`. Esto asegura que las contraseñas no se almacenen en texto plano.

### Ejemplo de Cifrado

```javascript
import bcrypt from 'bcrypt';

// Cifrar la contraseña
const cifrarContraseña = async (contraseña) => {
    const saltRounds = 10;
    const hash = await bcrypt.hash(contraseña, saltRounds);
    return hash;
};
```

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

### Notas

- La sintaxis de `async/await` se ha utilizado en el ejemplo de cifrado para manejar promesas.
- Puedes ajustar cualquier sección según sea necesario para que se adapte mejor a tu aplicación y su funcionalidad.

Si necesitas más ajustes o información adicional, ¡no dudes en decírmelo!