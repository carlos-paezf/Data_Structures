# Data Structures

[![wakatime](https://wakatime.com/badge/user/8ef73281-6d0a-4758-af11-fd880ca3009c/project/d0d1eba8-1a28-4769-b63d-63d44de5c9c9.svg)](https://wakatime.com/badge/user/8ef73281-6d0a-4758-af11-fd880ca3009c/project/d0d1eba8-1a28-4769-b63d-63d44de5c9c9?for-the-style=badge)

> 🌟 *El conocimiento no es útil si no se comparte.*

Este proyecto es una plataforma de documentación educativa desarrollada con [Docusaurus](https://docusaurus.io/).

## Objetivo

Brindar tanto a estudiantes cómo docentes, un recurso descentralizado, estructurado y multilingüe, que facilite el acceso a los siguientes temas:

- Introducción a las estructuras de datos:
  - ¿Qué son y para qué sirven?
  - Eficiencia, espacio y tiempo
  - Tipos de estructuras: primitivas y abstractas
  - TDA (Tipos de datos abstractos)
- Arreglos:
  - Arreglos estáticos (implementación en memoria, ventajas y limitaciones)
  - Arreglos dinámicos (redimensionamiento, amortized cost)
- Análisis de algoritmos:
  - Notación Big O
  - Complejidad temporal y espacial
  - Casos mejor, promedio y peor
- Estructuras Lineales y Uso de Nodos
  - Nodos y Punteros (simulación en lenguajes sin punteros explícitos)
  - Listas enlazadas:
    - Simples
    - Dobles
    - Circulares simples
    - Circulares dobles
  - Stack (Pilas): LIFO, implementación con arrays y listas enlazadas
  - Queue (Colas): FIFO, variantes (colas dobles, de prioridad)
- Algoritmos de Ordenamiento
  - Fundamentos del ordenamiento: estabilidad, adaptabilidad y comparaciones
  - Ordenamientos básicos:
    - Bubble Sort
    - Selection Sort
    - Insertion Sort
  - Ordenamientos eficientes:
    - Merge Sort
    - Quick Sort
    - Heap Sort
  - Ordenamientos no basados en comparación:
    - Counting Sort
    - Radix Sort
    - Bucket Sort
- Estructuras No Lineales - Árboles
  - Definición y representación
  - Árboles binarios
  - Árboles binarios de búsqueda (BST)
  - Recorridos (inorden, preorden, postorden, BFS, DFS)
  - Árboles autobalanceados (AVL)
  - Árboles B y B+
  - Tries (árboles de prefijo)
  - Árboles rojo-negro
  - Segment Trees y Fenwick Trees
- Estructuras No lineales - Grafos
  - Definición, terminología y representación:
    - Lista de adyacencia
    - Matriz de adyacencia
  - Tipos de grafos: dirigidos, no dirigidos, ponderados
  - Recorridos: BFS, DFS
  - Algoritmos clásicos:
    - Dijkstra
    - Floyd-Warshall
    - Prim
    - Kruskal
  - Aplicaciones reales: mapas, redes sociales, sistemas de recomendación
- Estructuras especializadas
  - Skip Lists
  - Disjoint Set (Union Find)
  - Hashing
    - Funciones Hash
    - Colisiones:
      - Separación encadenada
      - Direccionamiento abierto (linear probing, quadratic, double hashing)
  - Tablas Hash
  - LRU Cache con HashMap + Double LinkedList
  - Bloom Filters (introducción conceptual y comparación)
- Aplicación Integral y Proyecto Final
  - Análisis de estructuras según el caso
  - Comparación de estructuras para diferentes escenarios
  - Optimización en entornos reales (web, videojuegos, big data)

## Internacionalización

El portal estará disponible en 2 idiomas:

- 🇪🇸 Español (predeterminado)
- 🇺🇸 Inglés

Puedes cambiar el idioma desde el menú superior del sitio.

## Instalación local

Para trabajar en el sitio de documentación de forma local:

```bash
# Clona el repositorio
git clone https://github.com/usuario/espacios-academicos-docs.git
cd espacios-academicos-docs

# Instala las dependencias
npm install

# Inicia el servidor de desarrollo
npm run start
```

Abre <http://localhost:3000> en tu navegador.

## Estructura del proyecto

- `/docs` Contenidos originales en español
- `/i18n/en` Traducciones al inglés
- `src` Componentes y páginas personalizadas
- `/static` Archivos estáticos (imágenes, descargas, etc.)

## Contribuciones

Este proyecto está abierto a docentes o estudiantes que deseen colaborar con:

- Traducciones
- Correcciones ortográficas o técnicas
- Mejora en la organización o visualización de los contenidos

Por favor, antes de hacer un Pull Request, revisa el archivo [`CONTRIBUTING.md`](./CONTRIBUTING.md)

## Comandos útiles

|Acción|Comando|
|--|--|
|Ejecutar en modo desarrollo|`npm run start`|
|Compilar para producción|`npm run build`|
|Generar estructura para traducciones|`npm run write-translations`|

## Autor

Proyecto desarrollado por Carlos David Páez Ferreira, Ingeniero de Sistemas y Docente Universitario, como recurso de apoyo para estudiantes y colegas.

## Licencia

Este proyecto está licenciado bajo la MIT License.
