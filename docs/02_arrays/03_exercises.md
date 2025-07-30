---
sidebar_position: 3
---

# Ejercicios propuestos por tema

## Arreglos estáticos

### Reto 1: Promedio de calificaciones

*Nivel:* Básico

*Tiempo estimado de resolución:* 20 minutos

*Participantes:* Individual

*Enunciado:* Crea un programa en Java que permita almacenar las calificaciones de 5 estudiantes en un arreglo estático y luego calcule el promedio general.

*Resultado esperado:* El programa debe mostrar el promedio calculado.

*Ejemplo de salida:*

```txt
Ingrese las 5 calificaciones:
Calificación 1: 4.0
Calificación 2: 3.5
Calificación 3: 5.0
Calificación 4: 2.8
Calificación 5: 3.9

El promedio general es: 3.84
```

*Pistas o ayudas:*

- Usa un arreglo de tipo `double` de tamaño 5.
- Recorre el arreglo con un ciclo `for` para sumar los valores.
- Divide la suma entre el tamaño del arreglo para obtener el promedio.

### Reto 2: Mayor y menor número

*Nivel:* Básico

*Tiempo estimado de resolución:* 25 minutos

*Participantes:* En parejas

*Enunciado:* Diseña un programa que almacene 10 números enteros en un arreglo estático y determine cuál es el mayor y cuál es el menor.

*Resultado esperado:* Debe imprimir el valor mayor y el menor encontrados en el arreglo.

*Ejemplo de salida:*

```txt
Números: [8, 3, 12, 1, 7, 9, 2, 11, 6, 4]
El número mayor es: 12
El número menor es: 1
```

*Pistas o ayudas:*

- Inicializa las variables mayor y menor con el primer elemento del arreglo.
- Usa un ciclo para comparar y actualizar estas variables.

### Reto 3: Invertir el contenido de un arreglo

*Nivel:* Medio

*Tiempo estimado de resolución:* 30 minutos

*Participantes:* Individual

*Enunciado:* Crea un programa que guarde 6 cadenas de texto en un arreglo estático y muestre las cadenas en orden inverso al que fueron ingresadas.

*Resultado esperado:* Debe imprimir los elementos invertidos.

*Ejemplo de salida:*

```txt
Palabras: [Java, POO, Arreglos, Estáticos, Ejercicios, Final]
Orden invertido: [Final, Ejercicios, Estáticos, Arreglos, POO, Java]
```

*Pistas o ayudas:*

- Usa un arreglo de tipo `String`.
- Crea un segundo ciclo `for` que recorra el arreglo desde el final hasta el principio.

### Reto 4: Registro de productos con POO

*Nivel:* Medio

*Tiempo estimado de resolución:* 45 minutos

*Participantes:* En grupo (máx. 3 personas)

*Enunciado:* Implementa una clase `Producto` con atributos `nombre`, `precio` y `cantidad`. Crea un arreglo estático de 5 posiciones que almacene instancias de la clase y calcule el valor total del inventario (precio * cantidad de cada producto).

*Resultado esperado:* Debe mostrar el listado de productos y el valor total del inventario.

*Ejemplo de salida:*

```txt
Producto: Laptop - Precio: 2500 - Cantidad: 3
Producto: Mouse - Precio: 50 - Cantidad: 10
Producto: Teclado - Precio: 100 - Cantidad: 5
Producto: Monitor - Precio: 800 - Cantidad: 2
Producto: Impresora - Precio: 500 - Cantidad: 1
Valor total del inventario: 12400
```

*Pistas o ayudas:*

- Usa una clase con constructor y métodos `get` y `set`.
- Crea un ciclo para sumar el valor total.

## Reto 5: Búsqueda en un arreglo de objetos

*Nivel:* Avanzado

*Tiempo estimado de resolución:* 60 minutos

*Participantes:* En grupo (máx. 3 personas)

*Enunciado:* Basándote en la clase `Producto` del reto anterior, permite al usuario buscar un producto por su nombre dentro del arreglo estático. Si el producto existe, debe mostrar su precio y cantidad; de lo contrario, debe indicar que no se encontró.

*Resultado esperado:*

```txt
Ingrese el nombre del producto a buscar: Monitor
Resultado: Producto encontrado - Precio: 800 - Cantidad: 2
```

O si no existe:

```txt
Resultado: Producto no encontrado.
```

*Pistas o ayudas:*

- Usa un ciclo `for` para recorrer el arreglo de objetos.
- Apóyate en el método `equalsIgnoreCase` para comparar cadenas.

## Arreglos dinámicos

### Reto 1: Lista dinámica de nombres

*Nivel:* Básico

*Tiempo estimado de resolución:* 20 minutos

*Participantes:* Individual

*Enunciado:* Crea un programa que permita agregar nombres a una lista dinámica (`ArrayList`) hasta que el usuario escriba la palabra "fin". Al final, muestra todos los nombres ingresados.

*Resultado esperado:*

```txt
Ingrese nombres (escriba 'fin' para terminar):
Juan
María
Carlos
fin

Nombres ingresados: [Juan, María, Carlos]
```

*Pistas o ayudas:*

- Usa un `ArrayList<String>` en lugar de un arreglo estático.
- Recorre la lista usando un `for-each` para mostrar los elementos.

### Reto 2: Eliminar elementos repetidos

*Nivel:* Medio

*Tiempo estimado de resolución:* 30 minutos

*Participantes:* En parejas

*Enunciado:* Diseña un programa que almacene números enteros en un `ArrayList` y elimine los duplicados, dejando solo los números únicos.

*Resultado esperado:*

```txt
Números originales: [4, 2, 4, 5, 2, 6]
Números sin duplicados: [4, 2, 5, 6]
```

*Pistas o ayudas:*

- Usa un `ArrayList<Integer>`.
- Apóyate en un `Set` o en el método `contains` para evitar duplicados.

### Reto 3: Gestión de estudiantes con POO

*Nivel:* Medio

*Tiempo estimado de resolución:* 45 minutos

*Participantes:* Individual

*Enunciado:* Crea una clase `Estudiante` con atributos `nombre` y `nota`. Usa un `ArrayList<Estudiante>` para permitir agregar estudiantes dinámicamente. Al final, muestra el promedio de notas.

*Resultado esperado:*

```txt
Estudiantes:
Juan - Nota: 3.5
María - Nota: 4.2
Carlos - Nota: 2.9

Promedio: 3.53
```

*Pistas o ayudas:*

- Implementa constructores y métodos `get` y `set`.
- Recorre el `ArrayList` con un `for` para calcular el promedio.

### Reto 4: Carrito de compras

*Nivel:* Avanzado

*Tiempo estimado de resolución:* 60 minutos

*Participantes:* En grupo (máx. 3 personas)

*Enunciado:* Crea una clase `Producto` con atributos `nombre`, `precio` y `cantidad`. Implementa un `ArrayList<Producto>` que permita agregar productos al carrito. Debes incluir las opciones:

1. Agregar producto
2. Eliminar producto por nombre
3. Mostrar el total de la compra

*Resultado esperado:*

```txt
Productos en el carrito:
1. Laptop - $3000 - Cantidad: 1
2. Mouse - $50 - Cantidad: 2

Total: $3100
```

*Pistas o ayudas:*

- Usa métodos para agregar, eliminar y calcular el total.
- Apóyate en el método `removeIf` para eliminar productos por nombre.

### Reto 5: Sistema de reservas de vuelos

*Nivel:* Avanzado

*Tiempo estimado de resolución:* 90 minutos

*Participantes:* En parejas

*Enunciado:* Implementa una clase `Reserva` con atributos `codigoVuelo`, `nombrePasajero` y `asiento`. Crea un `ArrayList<Reserva>` que permita:

1. Registrar reservas.
2. Buscar reservas por el código de vuelo.
3. Mostrar la lista completa.

*Resultado esperado:*

```txt
Ingrese el código de vuelo a buscar: AV123
Reservas encontradas:
AV123 - Pedro Pérez - Asiento: 10A
AV123 - Laura Gómez - Asiento: 10B
```

*Pistas o ayudas:*

- Usa `equalsIgnoreCase` para comparar el código de vuelo.
- Puedes aplicar métodos como `stream().filter()` o recorrer con un `for`.
