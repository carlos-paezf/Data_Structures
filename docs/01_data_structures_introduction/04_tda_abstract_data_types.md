---
sidebar_position: 4
---

# TDA (Tipos de Datos Abstractos)

Un **Tipo de Dato Abstracto (TDA)** es un modelo matemático o lógico que define un **comportamiento** o **conjunto de operaciones** que se pueden realizar sobre un conjunto de datos, **sin especificar su implementación** interna.

El TDA se enfoca en **qué operaciones se pueden hacer** y **qué resultados se esperan**, pero no en cómo se hacen. Este principio de ocultar los detalles internos se llama **abstracción**.

## Características de un TDA

- Define operaciones válidas (por ejemplo: `insert`, `delete`, `search`)
- Es independiente del lenguaje de programación
- Permite múltiples implementaciones internas
- Promueve el diseño modular y reutilizable

## Ejemplos clásicos de TDA

|TDA|Operaciones fundamentales|Ejemplo real|
|--|--|--|
|Lista|Agregar, eliminar, acceder por posición|Lista de tareas en una app|
|Pila|`push`, `pop`, `peek`|Función "deshacer" en un editor|
|Cola|`enqueue`, `dequeue`, `peek`|Cola de impresión|
|Diccionario|`insert(key, value)`, `search(key)`|Cache de datos en navegador|
|Conjunto|`union`, `intersection`, `elimination`|Lista de usuarios únicos conectados|

> "Los TDA permiten a los diseñadores centrarse en el comportamiento deseado sin preocuparse por los detalles de implementación" (Lafore, 2017).

## Aplicaciones prácticas

- **Videojuegos**: Pilas para control de estados, colas de eventos
- **Bases de datos**: Árboles B y listas para índices
- **Inteligencia artificial**: Grafos como TDA para modelar relaciones
- **Redes sociales**: Diccionarios para búsquedas rápidas de usuarios

## Representación visual (ASCII)

```text
TDA: Pila (Stack)
Operaciones → push(10) → push(20) → pop()
Resultado:
Top → [10] → null
```

## Ejemplos

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs>
<TabItem value="java" label="Paradigma: Orientado a Objetos">

<Tabs>
<TabItem value="java-code" label="Código Java Ejemplo">

```java title="MyStack.java" showLineNumbers
package adt;

public class MyStack {
    private final int[] data;
    private int top;

    public MyStack(int capacity) {
        data = new int[capacity];
        top = -1;
    }

    public void push(int value) {
        if (top == data.length - 1) throw new IllegalStateException("Stack Overflow");
        data[++top] = value;
    }

    public int pop() {
        if (top == -1) throw new IllegalStateException("Stack Underflow");
        return data[top--];
    }

    public int peek() {
        if (top == -1) throw new IllegalStateException("Stack Empty");    
        return data[top];
    }
}
```

</TabItem>
<TabItem value="java-test" label="Test Unitario">

```java title="MyStackTest.java" showLineNumbers
import adt.MyStack;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertion.*;

public class MyStackTest {
    @Test
    void testStackPushPop() {
        MyStack stack = new MyStack(5);
        stack.push(10);    
        stack.push(20);    
        assertEquals(20, stack.pop());
        assertEquals(10, stack.peek());
    }
}
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="python" label="Paradigma: Procedural">

<Tabs>
<TabItem value="python-code" label="Código Python Ejemplo">

```py title="stack_adt.py" showLineNumbers
class StackADT:
    def __init__(self, capacity):
        self.data = []
        self.capacity = capacity

    def push(self, value):
        if len(self.data) >= self.capacity:
            raise OverflowError("Stack Overflow")
        self.data.append(value)

    def pop(self):
        if not self.data:
            raise IndexError("Stack Underflow")
        return self.data.pop()

    def peek(self):
        if not self.data:
            raise IndexError("Stack Empty")
        return self.data[-1]
```

</TabItem>
<TabItem value="python-test" label="Test Unitario">

```py title="test_stack_adt.py" showLineNumbers
import unittest
from stack_adt import StackADT

class TestStackADT(unittest.TestCase):
    def test_push_pop_peek(self):
        stack = StackADT(3)
        stack.push(5)
        stack.push(8)
        self.assertEqual(stack.pop(), 8)
        self.assertEqual(stack.peek(), 5)

if __name__ == '__main__':
    unittest.main()
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="ts" label="Paradigma: Funcional">

<Tabs>
<TabItem value="ts-code" label="Código TypeScript Ejemplo">

```ts title="stack.ts" showLineNumbers
export type Stack<T> = {
    push: (val: T) => void;
    pop: () => T | undefined;
    peek: () => T | undefined;
    data: T[];
}

export const createStack = <T>(capacity: number): Stack<T> => {
    const data: T[] = [];

    return {
        data,
        push: (val) => {
            if (data.length >= capacity) throw new Error("Stack Overflow");
            data.push(val);
        },
        pop: () => data.pop(),
        peek: () => data[data.length - 1]
    };
};
```

</TabItem>
<TabItem value="ts-test" label="Test Unitario">

```ts title="stack.test.ts" showLineNumbers
import { createStack } from "./stack";

test("stack operation", () => {
    const stack = createStack<number>(2);
    stack.push(10);
    stack.push(20);
    expect(stack.pop()).toBe(20);
    expect(stack.peek()).toBe(10);
})
```

</TabItem>
</Tabs>

</TabItem>
</Tabs>

## Referencias

- Lafore, R. (2017). Data Structures and Algorithms in Java. Pearson.
- Goodrich, M., Tamassia, R., & Goldwasser, M. (2014). Data Structures and Algorithms in Python. Wiley.
- Cormen, T. H., Leiserson, C. E., Rivest, R. L., & Stein, C. (2022). Introduction to Algorithms. MIT Press.
- [TypeScript Handbook. (2024).](https://www.typescriptlang.org/docs/)
