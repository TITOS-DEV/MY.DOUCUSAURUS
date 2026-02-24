---
sidebar_position: 2
---

# Actividad Queryes: Combinacion de Tablas
En esta sección documentamos los ejercicios para resolver el ejercicio de la actividad.

## Instalación  y conexion a base de datos 

```js
const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());

const PORT = 3001;

const pool = mysql.createPool({
    host: '157.180.40.190',
    user: 'root',
    password: 'scORHWprCvp26Gz1zwPQgSsokHyPC2',
    database: 'db_andrescortes_ejercicio'
}).promise();


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
```

## Manejo de Errores

| Práctica | Descripción | 
| :--- | :--- | 
| **Consultas Preparadas** | Plantilla para las queryes |
| **Códigos de Estado HTTP** | Se retorna 200 para éxito, 404 para no encontrado y 500 para errores de servidor. | 
| **Manejo de Errores** | Uso de bloques try...catch para capturar fallos en la conexión o en la base de datos. | 

## PLantilla para las queryes

```js
app.get('/level1/ejercicio2', async (req, res) => {
    try {
        const [rows] = await pool.query(`
            --AQUI SE INGRESA LA QUERY--
        `);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Error en la base de datos' });
    }
});
```

## Nivel 1 

### Ejercicio 1

```sql
SELECT 
u.name, 
u.email, 
o.order_number 
FROM users u 
JOIN orders o ON u.id = o.user_id 
WHERE u.name = 'Jorge' AND u.last_name =
'Piña'
```

### Ejercicio 2

```sql
SELECT o.id AS codigo_pedido,
    o.created_at AS fecha
FROM orders o
INNER JOIN users u ON o.user_id = u.id
WHERE u.email = 'isamel@pedrito.es';
```

### Ejercicio 3

```sql
SELECT p.name AS producto,
c.name AS categoria
FROM products p
INNER JOIN categories c 
ON p.category_id = c.id;
```

### Ejercicio 4

```sql
SELECT u.id,
    u.name,
    u.email
FROM users u
LEFT JOIN orders o 
ON u.id = o.user_id
WHERE o.id IS NULL;
```

### Ejercicio 5

```sql
SELECT u.name AS usuario,
SUM(o.total) AS total_gastado
FROM users u
INNER JOIN orders o 
ON u.id = o.user_id
WHERE u.id = 5 GROUP BY u.name
```

### Ejercicio 6

```sql
SELECT status, COUNT(*) AS total_pedidos
FROM orders
GROUP BY status;
```

### Ejercicio 8

```sql
SELECT product_id, quantity
FROM order_product
WHERE order_id = 123;
```

### Ejercicio 9

```sql
SELECT DISTINCT u.name
FROM users u
JOIN orders o ON u.id = o.user_id
WHERE u.city = 'Los Fonseca';
```

### Ejercicio 10

```sql
SELECT u.name, AVG(o.total) AS promedio_pedido
FROM users u
JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name;
```

## Nivel 2

### Ejercicio 11

```sql
SELECT o.id AS codigo_orden, o.created_at AS fecha, p.name AS producto, op.price AS precio_venta
FROM orders o
JOIN order_product op ON o.id = op.order_id
JOIN products p ON op.product_id = p.id
```

### Ejercicio 12

```sql
SELECT c.name AS categoria, SUM(op.quantity * op.price) AS ingreso_total
FROM categories c
JOIN products p ON c.id = p.category_id
JOIN order_product op ON p.id = op.product_id
GROUP BY c.name
```
