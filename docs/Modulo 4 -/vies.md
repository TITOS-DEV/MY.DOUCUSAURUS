---
sidebar_position: 3
---


# Actividad Vistas: Funciones en SQL
En esta sección documentamos los ejercicios para resolver el ejercicio de la actividad de las vistas.

## Descripcion
En esta actividad exploramos cómo simplificar consultas complejas mediante el uso de **Vistas**, optimizando el acceso a la información y mejorando la seguridad de los datos.

## Ejercicio 1 – Vista de usuarios mayores de edad
Crea una vista llamada view_adult_users que cumpla con lo siguiente:

Muestre los campos:
id

* first_name
* last_name
* document_type
* document_number
* city
* country

Calcule la edad a partir del campo **birth_date**.

Incluya únicamente usuarios cuya edad sea mayor o igual a 18 años.

```sql
CREATE VIEW jhonatan_view_adult_users AS 
SELECT 
    u.id, 
    u.first_name,
    u.last_name, 
    u.document_type, 
    u.document_number, 
	u.city, 
    u.country 
FROM users u WHERE birth_date < "2008-02-01"
```

## Ejercicio 2 – Vista de contactos consolidados

Crea una vista llamada view_user_contacts que:

1. Genere un campo full_name concatenando first_name y last_name.
2. Muestre el correo electrónico del usuario.
3. Genere un campo contact_number que:
    * Use mobile si existe.
    * En caso contrario use phone.
    * Si ninguno existe, muestre el texto **"Sin teléfono"**.
4. Incluya:
    * address
    * city
    * state
    * country


```sql
CREATE VIEW jhonatan__detalle_usuarios AS
SELECT 
    CONCAT(first_name, ' ', last_name) AS full_name,
    email,
    CASE 
        WHEN mobile IS NOT NULL AND mobile <> '' THEN mobile
        WHEN phone IS NOT NULL AND phone <> '' THEN phone
        ELSE 'Sin teléfono'
    END AS contact_number,
    address,
    city,
    state,
    country
FROM users;
```


## Ejercicio 3 – Vista financiera de usuarios
Crea una vista llamada view_users_with_income que:

* Muestre los campos:
    * id
    * first_name
    * last_name
    * profession
    * monthly_income

* Incluya únicamente usuarios que tengan ingresos registrados y mayores a cero.

Luego, realiza una consulta sobre la vista que ordene los usuarios por ingreso mensual de mayor a menor.

```sql
CREATE VIEW jhonatan_view_users_with_income AS
SELECT 
    id,
    first_name,
    last_name,
    profession,
    monthly_income
FROM users
WHERE monthly_income IS NOT NULL 
  AND monthly_income > 0;
```

### Consulta sobre la vista

```sql
SELECT * FROM jhonatan_view_users_with_income
ORDER BY monthly_income DESC;
```

## Ejercicio 4 – Vista demográfica
Crea una vista llamada view_demographic_summary que:

1. Genere un campo full_name.
2. Calcule la edad del usuario.
3. Muestre los campos:
    * gender
    * marital_status
    * education_level
    * city
    * country

Después, realiza una consulta que:

Agrupe los usuarios por ciudad.
Muestre la cantidad de usuarios por cada ciudad.

```sql
CREATE VIEW jhonatan_view_demographic_summary AS
SELECT 
    CONCAT(first_name, ' ', last_name) AS full_name,
    TIMESTAMPDIFF(YEAR, birth_date, CURDATE()) AS age,
    gender,
    marital_status,
    education_level,
    city,
    country
FROM users;
```

### Consulta sobre la vista

```sql
SELECT 
    city, 
    COUNT(*) AS total_users
FROM jhonatan_view_demographic_summary
GROUP BY city
ORDER BY total_users DESC;
```


## Ejercicio 5 – Vista de perfil ejecutivo
Crea una vista llamada view_user_profile que:

1. Genere el campo full_name.
2. Incluya información de identificación:
    * document_type
    * document_number
3. Calcule la edad del usuario.
4. Incluya:
    * profession
    * education_level
    * company
5. Incluya información financiera:
    * monthly_income
    * Incluya ubicación:
    * city
    * country
Luego, realiza una consulta que:

Filtre únicamente usuarios con ingresos mayores a **3.000.000**.
Ordene los resultados por ciudad.


```sql
CREATE VIEW jhonatan_view_user_profile AS
SELECT 
    CONCAT(first_name, ' ', last_name) AS full_name,
    

    document_type,
    document_number,
    

    TIMESTAMPDIFF(YEAR, birth_date, CURDATE()) AS age,
    

    profession,
    education_level,
    company,
    

    monthly_income,
    
    city,
    country
FROM users;
```

### Consulta sobre la vista

```sql
SELECT * FROM jhonatan_view_user_profile
WHERE monthly_income > 3000000
ORDER BY city ASC;
```
## Conceptos evaluados

    * CREATE VIEW
    * Funciones de fecha
    * CONCAT
    * COALESCE
    * WHERE
    * ORDER BY
    * GROUP BY

Las vistas permiten encapsular lógica de negocio directamente en la base de datos, mejorando legibilidad, reutilización y seguridad de las consultas.
