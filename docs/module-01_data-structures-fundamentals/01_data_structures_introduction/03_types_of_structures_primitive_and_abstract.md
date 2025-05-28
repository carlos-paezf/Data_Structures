---
sidebar_position: 3
---

# Tipos de estructuras: Primitivas y Abstractas

Las estructuras de datos pueden clasificarse en dos grandes grupos:

## Estructuras de datos primitivas

Son aquellas que están directamente soportadas por el lenguaje de programación, y representan los tipos más básicos de almacenamiento de información. Usualmente están vinculadas al hardware y a los tipos fundamentales de memoria.

Ejemplos:

- `int` (enteros)
- `float` (decimales)
- `char` (caracteres)
- `bool` (valores lógicos)
- `string` (cadenas de texto, en algunos lenguajes)

Las anteriores se utilizan como base para construir estructuras más complejas.

## Estructuras de datos abstractas (EDAs)

Son modelos conceptuales que permiten almacenar, organizar y manipular datos de manera eficiente. No están necesariamente implementadas en un lenguaje, sino que se definen por su **comportamiento esperado** (operaciones, reglas de acceso, y organización).

Ejemplos comunes:

- **Listas** (listas enlazadas, listas dinámicas)
- **Colas y Pilas** (FIFO y LIFO)
- **Árboles** (binarios, AVL, B)
- **Grafos**
- **Tablas hash / Diccionarios**

> Según Goodrich et al. (2014), las EDAs no solo organizan los datos, sino que también definen operaciones específicas con ciertas restricciones (por ejemplo, una pila permite insertar y eliminar solo desde un extremo)

## Diferencias clave

|Característica|Primitiva|Abstracta|
|--|--|--|
|Nivel de abstracción|Bajo|Alto|
|Soporte del lenguaje|Nativo|Requiere implementación o librerías|
|Operaciones complejas|No|Si|
|Ejemplo|`int`, `float`, `char`|Lista enlazada, pila, grafo|

## Aplicaciones prácticas

|Estructura|Aplicación real|
|--|--|
|Entero (`int`)|Contadores, IDs, controladores|
|Pila (Stack)|Deshacer acciones, llamadas recursivas|
|Árbol binario|Base de datos jerárquicas, rutas de archivos|
|Cola (Queue)|Procesamiento de tareas, impresión|
|Grafo|Mapa GPS, redes sociales|

## Representación Visual (ASCII)

```txt
Primitiva: int x = 5;

Abstracta: Stack
Top → [5] → [3] → [1] → null
```

## Ejemplos

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### Java - Paradigma: Orientado a Objetos

<Tabs>
<TabItem value="java-code" label="Código Ejemplo">

```java title="PrimitiveAndAbstract.java" showLineNumbers
import java.util.Stack

public class PrimitiveAndAbstract {
    public static int primitiveSum(int a, int b) {
        return a + b;
    }

    public static Stack<String> useStack() {
        Stack<String> stack = new Stack();
        stack.push("Login");
        stack.push("Perfil");
        // highlight-next-line
        stack.pop(); // Se elimina "Perfil"
        return stack;
    }
}
```

</TabItem>
<TabItem value="java-test" label="Test Unitario">

```java title="PrimitiveAndAbstractTest.java" showLineNumbers
import org.junit.jupiter.api.Test;
import java.util.Arrays;
import static org.junit.jupiter.api.Assertions.*;

class PrimitiveAndAbstractTest {
    @Test
    void testPrimitiveSum() {
        assertEquals(7, PrimitiveAndAbstract.primitiveSum(3, 4));
    }

    @Test
    void testUseStack() {
        Stack<String> result = PrimitiveAndAbstract.useStack();
        assertEquals("Login", result.peek());
    }
}
```

</TabItem>
</Tabs>

### Python - Paradigma: Procedural

<Tabs>
<TabItem value="python-code" label="Código Ejemplo">

```py title="structures.py" showLineNumbers
def sum_primitives(a: int, b: int) -> int:
    return a + b

def simulate_queue():
    queue = []
    queue.append("task1")
    queue.append("task2")
    # highlight-next-line
    queue.pop() # Se elimina "task1"
    return queue
```

</TabItem>
<TabItem value="python-test" label="Test Unitario">

```py title="test_structures.py" showLineNumbers
import unittest
from structures import sum_primitive, simulate_queue

class TestStructures(unittest.TestCase):
    def test_sum_primitives(self):
        self.assertEqual(sum_primitives(2, 5), 7)

    def test_simulate_queue(self):
        self.assertEqual(simulate_queue(), ["task2"])

if __name__ == "__main__":
    unittest.main()
```

</TabItem>
</Tabs>

### TypeScript - Paradigma: Funcional

<Tabs>
<TabItem value="ts-code" label="Código Ejemplo">

```ts title="structures.ts" showLineNumbers
export const combinePrimitives = (a: number, b: number): number => a + b;

export const useSet = (): Set<string> => {
    const roles = new Set<string>();
    roles.add("admin");
    roles.add("editor");
    return roles;
}
```

</TabItem>
<TabItem value="ts-test" label="Test Unitario">

```ts title="structures.test.ts" showLineNumbers
import { combinePrimitives, useSet } from "./structures"

test("combine primitives", () => {
    expect(combinePrimitives(4, 6)).toBe(10);
})

test("use set stores roles", () => {
    const result = useSet();
    expect(result.has("admin")).toBe(true);
})
```

</TabItem>
</Tabs>

## Referencias

- Goodrich, M., Tamassia, R., & Goldwasser, M. (2014). Data Structures and Algorithms in Java. Wiley.
- Cormen, T. H., Leiserson, C. E., Rivest, R. L., & Stein, C. (2022). Introduction to Algorithms. MIT Press.
- [Python Software Foundation. (2024).](https://docs.python.org/)
- [TypeScript Handbook. (2024).](https://www.typescriptlang.org/docs/)
- [Oracle Java Documentation. (2024).](https://docs.oracle.com/en/java/)
