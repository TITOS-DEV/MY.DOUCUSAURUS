---
sidebar_position: 1
---

# Introducción a la Normalización de Bases de Datos

Bienvenido a la documentación de mis ejercicios de diseño de bases de datos. El objetivo de este proyecto es demostrar la aplicación de las **Formas Normales (FN)** para transformar estructuras de datos caóticas en sistemas relacionales eficientes, íntegros y escalables.

## Objetivo del Proyecto
El diseño de una base de datos no se trata solo de crear tablas, sino de estructurar la información para evitar la redundancia y garantizar la integridad referencial. En esta documentación se presentan **4 casos de estudio** donde se aplicaron los siguientes procesos:

1.  **Análisis de Requerimientos:** Identificación de entidades y atributos.
2.  **Proceso de Normalización:** Aplicación de reglas desde 1FN hasta 3FN (o BCNF según el caso).
3.  **Implementación SQL:** Creación de esquemas y validación mediante consultas.

---

## Fundamentos Aplicados

Para cada ejercicio, se evaluaron los siguientes pilares de la normalización:

| Forma Normal | Objetivo Principal |
| :--- | :--- |
| **1FN** | Eliminar grupos repetidos y asegurar la atomicidad de los datos. |
| **2FN** | Eliminar dependencias parciales (que cada columna dependa de la clave primaria completa). |
| **3FN** | Eliminar dependencias transitivas (que las columnas no clave dependan solo de la clave primaria). |

---

## Metodología de Documentación
Cada uno de los 4 ejercicios está documentado siguiendo un estándar riguroso:

* **Esquema Lógico:** Diagramas Entidad-Relación (DER).
* **Diccionario de Datos:** Definición de tipos de datos y restricciones.
* **Scripts SQL:** Código limpio y comentado para la creación de la estructura.
* **Pruebas de Integridad:** Consultas complejas que demuestran la relación entre tablas.

:::tip Nota de Arquitectura
Aunque la normalización extrema mejora la integridad, en cada ejercicio se analiza si es necesario realizar una pequeña **desnormalización** por motivos de rendimiento, buscando siempre el equilibrio óptimo.
:::
