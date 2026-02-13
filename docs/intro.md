---
sidebar_position: 1
---

# Domuentation DBeaver 🐿️ 


# 📑 Guía de Ejercicios SQL: Tabla Users
Esta documentación contiene una serie de consultas SQL organizadas por niveles de complejidad, desde selecciones básicas hasta funciones de agregación.

## Nivel 1: Consultas Iniciales
### Ejercicio 1: Selección total
Muestra todos los registros y todas las columnas disponibles en la tabla de usuarios.

```
SELECT * FROM users;
```

### Ejercicio 2: Columnas específicas
Obtiene únicamente el nombre, apellido y correo electrónico de todos los usuarios.


```
SELECT first_name, last_name, email FROM users;
```
### Ejercicio 3: Filtro por Administradores
Filtra la tabla para mostrar solo a los usuarios que tienen el rol de 'admin'.

```
SELECT * FROM users WHERE role = 'admin';
```
### Ejercicio 4: Filtro por Tipo de Documento
Selecciona a los usuarios cuyo tipo de documento de identidad es 'CC' (Cédula de Ciudadanía).

```
SELECT * FROM users WHERE document_type = 'CC';
```
### Ejercicio 5: Usuarios por Fecha de Nacimiento
Busca a los usuarios que nacieron antes del 1 de enero de 2006.

```
SELECT * FROM users WHERE birth_date < '2006-01-01';
```
### Ejercicio 6: Filtro por Ingresos Superiores
Muestra a los usuarios que tienen un ingreso mensual mayor a 5.000.000.

```
SELECT * FROM users WHERE monthly_income > '5.000.000';
```
### Ejercicio 7: Búsqueda por Inicial
Utiliza el operador LIKE para encontrar usuarios cuyo nombre comienza con la letra 'A'.

```
SELECT * FROM users WHERE first_name LIKE 'a%';
```
### Ejercicio 8: Usuarios sin Empresa
Filtra los registros donde el campo de empresa está vacío (NULL).

```
SELECT * FROM users WHERE company IS NULL;
```
## Nivel 2: Consultas con Operadores Lógicos
### Ejercicio 9: Empleados con Rango de Edad
Selecciona empleados que nacieron antes del año 2001.

```
SELECT * FROM users WHERE birth_date < '2001-01-01' AND role = 'employee';
```
### Ejercicio 10: Usuarios Activos con CC
Filtra usuarios que tienen documento 'CC' y cuyo estado de cuenta está activo.

```
SELECT * FROM users WHERE document_type = 'CC' AND is_active = '1';
```
### Ejercicio 11: Usuarios Jóvenes por Rol
Busca registros con rol 'user' nacidos antes del 2006.

```
SELECT * FROM users WHERE birth_date < '2006-01-01' AND role = 'user';
```
### Ejercicio 12: Empleados con Salario Alto
Muestra a los empleados que perciben un ingreso mensual superior a 3.000.000.

```
SELECT * FROM users WHERE role = 'employee' AND monthly_income > '3.000.000';
```
### Ejercicio 13: Usuarios con Familia
Filtra a los usuarios casados que tienen al menos un hijo registrado.

```
SELECT * FROM users WHERE marital_status = 'Casado' AND children_count >= '1';
```
### Ejercicio 14: Filtro de Edad Múltiple
Busca usuarios que cumplan con cualquiera de los dos rangos de fecha de nacimiento especificados.

```
SELECT * FROM users WHERE birth_date < '1996-01-01' OR birth_date < '1986-01-01';
```
### Ejercicio 15: Administradores Verificados
Consulta avanzada para administradores verificados nacidos antes del 2001.

```
SELECT * FROM users WHERE role = 'admin' AND is_verified = true AND birth_date < '2001-01-01';
```
## Nivel 3: Agregaciones y Estadísticas
### Ejercicio 16: Conteo por Rol
Agrupa a los usuarios por su rol y cuenta cuántos registros existen en cada categoría.

```
SELECT role, COUNT(role) FROM users GROUP BY role;
```
### Ejercicio 17: Conteo por Documento
Agrupa y cuenta el total de usuarios según su tipo de documento de identidad.

```
SELECT document_type, COUNT(document_type) FROM users GROUP BY document_type;
```
### Ejercicio 18: Usuarios Totales
Cuenta específicamente cuántos usuarios tienen el rol de 'user'.

```
SELECT COUNT(role) FROM users WHERE role = 'user';
```
### Ejercicio 19: Promedio General de Ingresos
Calcula el promedio de la columna de ingresos mensuales de toda la tabla.

```
SELECT AVG(monthly_income) FROM users;
```
### Ejercicio 20: Promedio de Ingresos por Rol
Calcula cuánto gana en promedio cada grupo de usuarios según su cargo o rol.

```
SELECT role, AVG(monthly_income) FROM users GROUP BY role;
```