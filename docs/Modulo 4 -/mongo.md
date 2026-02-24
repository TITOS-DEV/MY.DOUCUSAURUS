---
sidebar_position: 3
---

# Consultas en MongoDB

### Colección: users

## Nivel 1 – Consultas Básicas

1. Listar todos los documentos de la colección **users**.

    ```js
    db["users"].find({},{document_number : 1 , _id: 0})
    ```

2. Mostrar únicamente los campos **first_name, last_name y email**.

    ```js
    db["users"].find({},{first_name : 1 , _id: 0, last_name :1, email :1})
    ```

3. Obtener todos los usuarios cuyo role sea **"admin"**.

    ```js
    db["users"].find({role : 'admin'},{})
    ```

4. Buscar los usuarios cuyo country sea **"Colombia"**.

    ```js
    db["users"].find({country : 'Colombia'},{})
    ```

5. Listar los usuarios que estén activos **(is_active = true).**

    ```js
    db["users"].find({is_active : 1},{})
    ```

6. Buscar los usuarios que no estén verificados **(is_verified = false)**.

    ```js
    db["users"].find({is_verified : 0},{})
    ```

7. Obtener los usuarios cuyo gender sea **"Masculino"**.

    ```js
    db["users"].find({gender : 'Masculino'},{})
    ```

8. Listar los usuarios que vivan en la ciudad **"Medellín"**.

    ```js
    db["users"].find({city : 'Millsstad'},{})
    ```

**No hay usuarios con city ("Medellín")**

9. Buscar los usuarios que tengan al menos un hijo **(children_count > 0)**.

    ```js
    db["users"].find({children_count : {$gt : 0}},{})
    ```

10. Listar los usuarios cuya profesión **(profession)** no sea null.

    ```js
    db["users"].find({profession : {$ne : null}},)
    ```

## Nivel 2 – Filtros con Operadores
11. Buscar usuarios con monthly_income mayor a 3000000.

    ```js
    db["users"].find({monthly_income : {$gt : 3000000}},)
    ```

12. Buscar usuarios con ingresos entre 2000000 y 5000000.

    ```js
    db["users"].find({monthly_income : {$gte : 3000000 , $lte : 5000000}})
    ```

13. Buscar usuarios cuya fecha de nacimiento sea posterior al 2000-01-01.

    ```js
    db.users.find({ birth_date: { $gt: new ISODate("2000-01-01") } })
    ```

14. Buscar usuarios cuyo document_type esté en ["CC", "CE"].

    ```js
    db.users.find({monthly_income: { $in: ["CC","CE"] } })
    ```

15. Buscar usuarios cuyo city no sea "Bogotá".

    ```js
    db["users"].find({city : {$ne : "Bogotá"}},)
    ```

16. Buscar usuarios cuyo nombre empiece por la letra "A".

    ```js
    db["users"].find({first_name : /^A/},)
    ```

17. Buscar usuarios cuyo email termine en "gmail.com".

    ```js
    db["users"].find({email : /@example.com$/ })
    ```

18. Buscar usuarios que tengan más de 2 hijos y estén activos.

    ```js
    db["users"].find({ children_count: { $gt: 2 }, is_active: 1 })
    ```

19. Buscar usuarios cuyo marital_status sea "Casado" y tengan hijos.

    ```js
    db["users"].find({ 
    marital_status: "Casado", 
    children_count: { $gt: 0 } 
    })
    ```

20. Buscar usuarios que estén inactivos o no verificados.

    ```js
    db.users.find({
    $or: [
    { is_active: 0 },
    { is_verified: 0 }
    ]
    })
    ```

## Nivel 3 – Ordenamiento y Paginación

21. Listar usuarios ordenados por monthly_income de mayor a menor.

22. Obtener los 5 usuarios más recientes según created_at.

23. Implementar paginación: mostrar la página 2 con 10 registros por página.

24. Mostrar nombre completo concatenado (first_name + last_name) y ciudad usando agregación.

25. Listar usuarios ordenados por fecha de nacimiento del más joven al mayor.

## Nivel 4 – Aggregation Framework

26. Calcular el ingreso promedio (monthly_income) de todos los usuarios.

27. Calcular el ingreso promedio por ciudad.

28. Contar cuántos usuarios hay por cada role.

29. Contar cuántos usuarios están activos vs inactivos.

30. Obtener la cantidad total de hijos agrupados por state.