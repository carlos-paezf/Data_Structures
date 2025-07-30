---
sidebar-position: 8
---

# Ejercicios propuestos por tema

## Nodos y Punteros

### Reto 1: Crear una estructura básica de nodo

*Nivel:* Básico

*Tiempo estimado de resolución:* 25 minutos

*Participantes:* Individual

*Enunciado:* Implementa una clase `Node` que contenga un valor entero y una referencia (`next`) al siguiente nodo. Luego, crea manualmente una cadena de 3 nodos y recorre la lista mostrando los valores.

*Resultado esperado:*

```txt
Valores en la lista: 10 -> 20 -> 30
```

*Pistas o ayudas:*

- Define la clase `Node` con atributos `data` y `next`.
- Usa referencias (`next`) para conectar los nodos.
- Un while es ideal para recorrer la lista.

## Lista Enlazada Simple

### Reto 1: Construcción básica de una lista enlazada simple

*Nivel:* Básico

*Tiempo estimado de resolución:* 25 minutos

*Participantes:* Individual

*Enunciado:* Crea una clase `Node` con atributos `data` (entero) y `next`. Luego, crea una clase `SimpleLinkedList` que tenga un atributo `head` (cabeza de la lista). Implementa un método `addAtEnd(int data)` que inserte un nodo al final de la lista y un método `printList()` que muestre todos los elementos.

*Resultado esperado:*

```txt
Lista: 5 -> 10 -> 15 -> null
```

*Pistas o ayudas:*

- Si `head` es `null`, el nuevo nodo será la cabeza.
- Usa un puntero temporal para recorrer hasta el último nodo.

### Reto 2: Insertar al inicio y eliminar el primero

*Nivel:* Básico

*Tiempo estimado de resolución:* 30 minutos

*Participantes:* En parejas

*Enunciado:* Usando la clase del reto anterior, implementa dos métodos adicionales:

- `addAtBeginning(int data)` que inserte un nodo al inicio.
- `deleteFirst()` que elimine el primer nodo de la lista.

*Resultado esperado:*

```txt
Insertando al inicio: 20 -> 5 -> 10 -> 15 -> null  
Eliminando el primero: 5 -> 10 -> 15 -> null
```

*Pistas o ayudas:*

- Al insertar al inicio, el nuevo nodo apunta al `head` y luego se actualiza `head`.
- Para eliminar el primero, actualiza `head = head.next`.

### Reto 3: Buscar un elemento

*Nivel:* Medio

*Tiempo estimado de resolución:* 35 minutos

*Participantes:* Individual

*Enunciado:* Agrega un método `search(int value)` que recorra la lista y devuelva `true` si el valor existe, o `false` si no está presente.

*Resultado esperado:*

```txt
Lista: 3 -> 6 -> 9 -> null  
Buscar 6: Encontrado  
Buscar 10: No encontrado
```

*Pistas o ayudas:*

- Usa un puntero temporal para recorrer nodo por nodo.
- Si el valor es encontrado, retorna `true` inmediatamente.

### Reto 4: Insertar en una posición específica

*Nivel:* Medio

*Tiempo estimado de resolución:* 50 minutos

*Participantes:* En grupo (máx. 3 personas)

*Enunciado:* Implementa el método `insertAtPosition(int data, int position)` que inserte un nodo en la posición indicada (0 es el inicio). Si la posición no existe, debe mostrar un mensaje de error.

*Resultado esperado:*

```txt
Lista inicial: 1 -> 2 -> 4 -> null  
Insertar en posición 2 (dato 3): 1 -> 2 -> 3 -> 4 -> null
```

*Pistas o ayudas:*

- Usa un contador para recorrer hasta el nodo anterior a la posición.
- Considera el caso cuando la posición es 0 (usar `addAtBeginning`).

### Reto 5: Eliminar por valor

*Nivel:* Avanzado

*Tiempo estimado de resolución:* 70 minutos

*Participantes:* En parejas

*Enunciado:* Crea un método `deleteByValue(int value)` que elimine el primer nodo que contenga el valor dado. Si el valor no existe, debe mostrar un mensaje de error.

*Resultado esperado:*

```txt
Lista inicial: 5 -> 7 -> 9 -> 7 -> null  
Eliminar 7: 5 -> 9 -> 7 -> null  
Eliminar 10: Valor no encontrado
```

*Pistas o ayudas:*

- Si el nodo a eliminar es `head`, actualiza la cabeza.
- Usa dos punteros: uno para el nodo actual y otro para el anterior.

## Lista Enlazada Doble

### Reto 1: Construcción básica de una lista doblemente enlazada

*Nivel:* Básico

*Tiempo estimado de resolución:* 30 minutos

*Participantes:* Individual

*Enunciado:* Crea una clase `DoublyNode` con atributos `data`, `next` y `prev`. Luego, crea una clase `DoublyLinkedList` con un atributo `head`. Implementa un método `addAtEnd(int data)` que inserte nodos al final y un método `printForward()` que muestre los elementos de izquierda a derecha.

*Resultado esperado:*

```txt
Lista: 10 <-> 20 <-> 30 <-> null
```

*Pistas o ayudas:*

- Si la lista está vacía, el nodo se convierte en la cabeza.
- Usa un puntero temporal para encontrar el último nodo.
- Actualiza el `prev` del nuevo nodo al conectarlo.

### Reto 2: Recorrer en ambos sentidos

*Nivel:* Básico

*Tiempo estimado de resolución:* 35 minutos

*Participantes:* En parejas

*Enunciado:* Agrega a la clase `DoublyLinkedList` el método `printBackward()` que muestre los elementos desde el último hasta el primero.

*Resultado esperado:*

```txt
Lista (adelante): 10 <-> 20 <-> 30 <-> null  
Lista (atrás): 30 <-> 20 <-> 10 <-> null
```

*Pistas o ayudas:*

- Recorre la lista hasta el último nodo con un puntero.
- Luego usa el puntero `prev` para regresar nodo a nodo.

### Reto 3: Insertar al inicio y al final

*Nivel:* Medio

*Tiempo estimado de resolución:* 45 minutos

*Participantes:* Individual

*Enunciado:* Implementa los métodos `addAtBeginning(int data)` y `addAtEnd(int data)` para insertar nodos en cualquiera de los extremos.

*Resultado esperado:*

```txt
Insertando al inicio: 5 <-> 10 <-> 20 <-> 30 <-> null  
Insertando al final: 5 <-> 10 <-> 20 <-> 30 <-> 40 <-> null
```

*Pistas o ayudas:*

- Al insertar al inicio, el nuevo nodo apunta a la cabeza actual y se actualiza el `prev` de la cabeza.
- Al insertar al final, actualiza el `next` del último nodo y el `prev` del nuevo nodo.

## Listas Enlazada Circular Simple

### Reto 1: Resolver el problema de Josephus

*Nivel:* Avanzado

*Tiempo estimado de resolución:* 90 minutos

*Participantes:* En parejas

*Enunciado:* Usando la lista circular, implementa el **[problema de Josephus](https://youtu.be/pkq_6DXycZg?si=r-quFc5qvowdVN2Y)**: en un grupo de `n` personas numeradas, se elimina cada `k`-ésima persona hasta que solo quede una.

*Resultado esperado:*

```txt
Personas: 1 -> 2 -> 3 -> 4 -> 5 -> (regresa a 1)
k = 3

Personas tras eliminaciones:
Personas: 1 -> 2 -> 4 -> 5 (se elimina al 3, continua desde el 4)
Personas: 2 -> 4 -> 5 (se elimina al 1, continua desde el 2)
Personas: 2 -> 4 (se elimina al 5, continua desde el 2)
Personas: 4 (se elimina al 2, continua desde el 4)

Persona sobreviviente: 4
```

```txt
Personas: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 11 -> 12 -> (regresa a 1)
k = 6

Personas tras eliminaciones:
Personas: 1 -> 2 -> 3 -> 4 -> 5 -> 7 -> 8 -> 9 -> 10 -> 11 -> 12 (se elimina al 6, continua desde el 7)
Personas: 1 -> 2 -> 3 -> 4 -> 5 -> 7 -> 8 -> 9 -> 10 -> 11 (se elimina al 12, continua desde el 1)
Personas: 1 -> 2 -> 3 -> 4 -> 5 -> 8 -> 9 -> 10 -> 11 (se elimina al 7, continua desde el 8)
Personas: 1 -> 3 -> 4 -> 5 -> 8 -> 9 -> 10 -> 11 (se elimina al 2, continua desde el 3)
Personas: 1 -> 3 -> 4 -> 5 -> 8 -> 9 -> 11 (se elimina al 10, continua desde el 11)
Personas: 1 -> 3 -> 4 -> 5 -> 9 -> 11 (se elimina al 8, continua desde el 9)
Personas: 1 -> 3 -> 4 -> 9 -> 11 (se elimina al 5, continua desde el 9)
Personas: 1 -> 3 -> 4 -> 11 (se elimina al 9, continua desde el 11)
Personas: 3 -> 4 -> 11 (se elimina al 1, continua desde el 3)
Personas: 3 -> 4 (se elimina al 11, continua desde el 3)
Personas: 3 (se elimina al 4, continua desde el 3)

Persona sobreviviente: 3
```

*Pistas o ayudas:*

- Usa la lista circular para avanzar `k` posiciones y eliminar el nodo actual.
- Repite el proceso hasta que solo quede un nodo en la lista.

## Lista Enlazada Circular Doble

### Reto 1: Simular un sistema de turnos

*Nivel:* Avanzado

*Tiempo estimado de resolución:* 90 minutos

*Participantes:* En parejas

*Enunciado:* Usando la lista doblemente circular, crea un sistema que permita registrar personas en una fila de turnos y avanzar al siguiente o anterior turno en cualquier momento. Debe incluir métodos para:

- Registrar una persona al final de la lista.
- Avanzar al siguiente turno (`next`).
- Retroceder al turno anterior (`prev`).
- Mostrar el turno actual.

*Resultado esperado:*

```txt
Personas: Ana <-> Luis <-> Marta <-> (regresa a Ana)  
Turno actual: Ana  
Siguiente turno: Luis  
Siguiente turno: Marta  
Anterior turno: Luis
```

*Pistas o ayudas:*

- Usa un puntero `current` para mantener el turno actual.
- Aprovecha los punteros `next` y `prev` para moverte entre los turnos.

## Stack (Pilas): LIFO, implementación con arrays y listas enlazadas

### Reto 1: Validar paréntesis balanceados

*Nivel:* Básico

*Tiempo estimado de resolución:* 35 minutos

*Participantes:* En parejas

*Enunciado:* Usando la clase `StackArray`, implementa un método `isBalanced(String expression)` que verifique si una cadena de paréntesis `()`, llaves `{}` y corchetes `[]` está balanceada.

*Resultado esperado:*

```txt
Expresión: "{[()]}" -> Balanceada
Expresión: "{[(])}" -> No balanceada
```

*Pistas o ayudas:*

- Inserta caracteres de apertura en la pila.
- Cuando encuentres un cierre, verifica si coincide con el elemento en la cima.

### Reto 2: Deshacer y rehacer (Undo/Redo)

*Nivel:* Medio

*Tiempo estimado de resolución:* 60 minutos

*Participantes:* En grupo (máx. 3 personas)

*Enunciado:* Simula un sistema de edición de texto con dos pilas:

- Una pila `undo` que almacene las acciones realizadas.
- Una pila `redo` que almacene las acciones deshechas.

Debes permitir:

1. Escribir texto.
2. Deshacer la última acción (`undo`).
3. Rehacer la última acción (`redo`).

*Resultado esperado:*

```txt
Texto: "Hola"
Undo -> Texto: ""
Redo -> Texto: "Hola"
```

*Pistas o ayudas:*

- Cada acción puede representarse como una cadena con el texto agregado o eliminado.
- Usa dos instancias de la pila para controlar las operaciones.

### Reto 3: Evaluar expresiones en notación postfija (RPN)

*Nivel:* Avanzado

*Tiempo estimado de resolución:* 90 minutos

*Participantes:* En parejas

*Enunciado:* Usando una pila, implementa un método `evaluateRPN(String expression)` que evalúe expresiones en [notación postfija](https://medium.com/@interviewbuddies/reverse-polish-notation-b88524252960).

*Ejemplo:*

```txt
Expresión: "5 1 2 + 4 * + 3 -"  
Resultado: 14
```

```txt
Expresión: "40 15 + 33 11 - 22 / 3 + *"  
Resultado: 220
```

*Pistas o ayudas:*

- Recorre la expresión por tokens.
- Si el token es un número, haz `push`.
- Si es un operador, haz `pop` de los dos últimos valores, evalúa y haz `push` del resultado.

## Queue (Colas): FIFO, variantes (colas dobles, de prioridad)

### Reto 1: Simular una fila de atención al cliente

*Nivel:* Medio

*Tiempo estimado de resolución:* 50 minutos

*Participantes:* Individual

*Enunciado:* Simula una fila de atención al cliente usando la clase `QueueLinkedList`. Cada cliente tiene un nombre y un número de turno. Debes permitir:

1. Registrar un cliente (`enqueue`).
2. Atender un cliente (`dequeue`).
3. Mostrar el siguiente cliente en ser atendido.

*Resultado esperado:*

```txt
Clientes en fila: Ana -> Luis -> Marta
Atendiendo a: Ana
Siguiente cliente: Luis
```

*Pistas o ayudas:*

- Crea una clase `Cliente` con atributos `nombre` y `turno`.
- Al hacer `dequeue`, muestra el cliente atendido.

### Reto 2: Cola de prioridad básica

*Nivel:* Medio

*Tiempo estimado de resolución:* 60 minutos

*Participantes:* En grupo (máx. 3 personas)

*Enunciado:* Crea una clase `PriorityQueue` que inserte elementos en función de su prioridad (entero). Los elementos con mayor prioridad deben salir primero al hacer `dequeue()`.

Resultado esperado:

```txt
Insertando: (Ana, 2), (Luis, 5), (Marta, 1)
dequeue() -> Luis (prioridad 5)
dequeue() -> Ana (prioridad 2)
```

*Pistas o ayudas:*

- Al insertar, coloca el nuevo elemento en la posición correcta según su prioridad.
- Considera usar un `ArrayList` o un arreglo redimensionable.

### Reto 3: Cola doble (Deque)

*Nivel:* Avanzado

*Tiempo estimado de resolución:* 90 minutos

*Participantes:* En parejas

*Enunciado:* Crea una clase `Deque` que permita insertar y eliminar elementos tanto al inicio como al final de la cola. Debe contener los métodos:

- `addFirst(int data)` y `addLast(int data)`.
- `removeFirst()` y `removeLast()`.
- `peekFirst()` y `peekLast()`.

*Resultado esperado:*

```txt
Cola: 2 <-> 4 <-> 6
removeFirst() -> 2
removeLast() -> 6
```

*Pistas o ayudas:*

- Puedes implementar esta estructura con nodos dobles (`prev` y `next`).
- Si se usan arreglos, considera el comportamiento circular.
