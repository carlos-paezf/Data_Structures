---
sidebar_position: 1
---

# ¿Qué son y para qué sirven?

Las **estructuras de datos** son formas organizadas de almacenar, administrar y manipular información en un programa informático. Permiten que los datos sean utilizados de manera eficiente, dependiendo del tipo de operación que se necesite realizar: búsqueda, inserción, eliminación, ordenamiento, entre otras.

En términos sencillos, una estructura de datos es como una herramienta especializada para organizar los datos. Así omo una caja de herramientas tiene compartimientos específicos para cada tipo de herramienta, las estructuras de datos ofrecen mecanismos diseñados para optimizar ciertas tareas.

## Tipos principales de estructuras de datos

1. Estructuras lineales:
   - Arreglos (Arrays)
   - Listas enlazadas
   - Pilas (Stacks)
   - Colas (Queues)
2. Estructuras no lineales:
   - Árboles (Trees)
   - Grafos (Graphs)
3. Estructuras hash:
   - Tablas Hash (Hash Tables)
   - Diccionarios / Mapas

## ¿Para qué sirven?

- Mejorar la eficiencia de algoritmos.
- Optimizar el uso de memoria.
- Hacer posibles aplicaciones complejas como:
  - Motores de búsqueda (uso de árboles y grafos)
  - Navegadores web (pilas para historial)
  - Videojuegos (listas enlazadas y árboles de decisión)

> Las estructuras de datos son esenciales en la informática porque permiten el desarrollo de algoritmos eficientes. Sin ellas, la manipulación y el almacenamiento de grandes volúmenes de información sería ineficaz (Cormen et al. 2022).

## Aplicaciones prácticas

|Estructura|Aplicación Real|
|--|--|
|Array|Almacenamiento de píxeles en una imagen digital|
|Stack|Función *undo* en editores de texto|
|Queue|Gestión de trabajos de impresión|
|Árbol binario|Base de datos jerárquicas y motores de búsqueda|
|Hash Table|Indexación de usuario por número de documento o ID|
|Grafo|Mapas de rutas en GPS o algoritmos de redes sociales|

## Representación visual

- Array:

  ```mermaid
  graph LR
      A[Índice 0: Valor A] --> B[Índice 1: Valor B]
      B --> C[Índice 2: Valor C]
      C --> D[Índice 3: Valor D]
  ```

- Lista:

  ```mermaid
  graph LR
      A["10|•"] --> B["20|•"]
      B --> C["30 → null"]
  ```

- Pila (Stack)

  ```mermaid
  graph TD
      A[Top: Elemento 3] --> B[Elemento 2]
      B --> C[Elemento 1]
      C --> D[Bottom: Elemento 0]
  ```

- Cola (Queue)

  ```mermaid
  graph LR
      A["Frente: 10"] --> B["20"]
      B --> C["30"]
      C --> D["Fondo: 40"]
  ```

- Árbol
  
  ```mermaid
  graph TD
    A["Raíz: 50"] --> B["Izquierda: 30"]
    A --> C["Derecha: 70"]
    B --> D["20"]
    B --> E["40"]
    C --> F["60"]
    C --> G["80"]
  ```

## Ejemplos

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs>
<TabItem value="java" label="Paradigma: Orientado a Objetos">

<Tabs>
<TabItem value="java-code" label="Código Java Ejemplo">

```java title="DataStructureDemo.java" showLineNumbers
package datastructures;

import java.util.HashMap;
import java.util.Stack;

public class DataStructureDemo {
    public static void main(String[] args) {
        Stack<String> navigationHistory = new Stack<>();
        navigationHistory.push("Inicio");
        navigationHistory.push("Perfil");
        navigationHistory.push("Configuración");
        System.out.println("Última página: " + navigationHistory.pop());

        HashMap<Integer, String> userMap = new HashMap<>();
        userMap.put(101, "María");
        userMap.put(102, "Carlos");
        System.out.println("Usuario 101: " + userMap.get(101));
    }
}
```

</TabItem>
<TabItem value="java-test" label="Test Unitario">

```java title="DataStructureDemoTest.java" showLineNumbers
package datastructures;

import org.junit.jupiter.api.Test;
import java.util.Stack;
import static org.junit.jupiter.api.Assertions.*;

public class DataStructureDemoTest {
    @Test
    void testStackPop() {
        Stack<String> stack = new Stack<>();
        stack.push("A");
        stack.push("B");
        assertEquals("B", stack.pop());
    }
}
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="python" label="Paradigma: Procedural">

<Tabs>
<TabItem value="python-code" label="Código Python Ejemplo">

```py title="demo_structures.py" showLineNumbers
from collections import deque

def demo_structures():
    queue = deque(["task1", "task2", "task3"])
    queue.append("task4")
    first = queue.popleft()
    print("Primera tarea procesada:", first)

    phone_book = {"Ana": "3001234567", "Luis": "3017654321"}
    print("Teléfono de Ana:", phone_book["Ana"])

if __name__ == "__main__":
    demo_structures()
```

</TabItem>
<TabItem value="python-test" label="Test Unitario">

```py  title="test_demo_structures.py" showLineNumbers
import unittest
from collections import deque

class TestStructures(unittest.TestCase):
    def test_queue(self):
        q = deque(["a", "b"])
        q.append("c")
        first = q.popleft()
        self.assertEqual(first, "a")

if __name__ == '__main__':
    unittest.main()
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="ts" label="Paradigma: Funcional">

<Tabs>
<TabItem value="ts-code" label="Código TypeScript Ejemplo">

```ts title="demo.ts" showLineNumbers
type User = { id: number, name: string };
const users: Map<number, User> = new Map();

users.set(1, { id: 1, name: "Laura" });
users.set(2, { id: 2, name: "Mateo" });

const getUserName = (id: number): string => users.get(id)?.name ?? "Desconocido";

console.log(getUserName(1)); // "Laura"
```

</TabItem>
<TabItem value="ts-test" label="Test Unitario">

```ts title="demo.test.ts" showLineNumbers
import { describe, test, expect } from '@jest/globals';

describe('User Map', () => {
    const users = new Map<number, { id: number; name: string }>();
    users.set(1, { id: 1, name: "Laura" });

test('get user name', () => {
        expect(users.get(1)?.name).toBe("Laura");
    });
});
```

</TabItem>
</Tabs>

</TabItem>
</Tabs>

## Referencias

- Cormen, T. H., Leiserson, C. E., Rivest, R. L., & Stein, C. (2022). Introduction to Algorithms (4.ª ed.). MIT Press.
- Goodrich, M., Tamassia, R., & Goldwasser, M. (2014). Data Structures and Algorithms in Python. Wiley.
- Oracle. (2024). [Java Platform Documentation.](https://docs.oracle.com/en/java/)
- Python Software Foundation. (2024). [collections — Container datatypes.](https://docs.python.org/3/library/collections.html)
- [TypeScript Handbook. (2024).](https://www.typescriptlang.org/docs/)
